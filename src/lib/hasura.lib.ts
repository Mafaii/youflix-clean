import { ClipData, HasuraClipData, HasuraToken } from "@/utils/types";
import { MagicUserMetadata } from "@magic-sdk/admin";

const HASURA_URL = process.env.NEXT_PUBLIC_HASURA_URL;

export async function addWatchedVideo(token: string, vidData: ClipData) {
    const query =
        `
        mutation CreateWatchedVideo {
            insert_youflix_user_videos(
                objects: {
                    desc: ${JSON.stringify(vidData.description.toString())}, 
                    img: "${vidData.imageUrl}", 
                    title: "${vidData.title}", 
                    vid_id: "${vidData.id}"
                }
            ) {
                returning {
                desc
              }
            }
        }

        `

    return processRequest(token, query, "CreateWatchedVideo", {});
}

export async function likeVideo(token: string, vidData: ClipData) {
    return await likeUnlike(true, token, vidData);
}

export async function unlikeVideo(token: string, vidData: ClipData) {
    return await likeUnlike(false, token, vidData);
}

export async function getWatchedVideos(token: string) {
    const query =
        ` query WatchedVideos {
        youflix_user_videos {
          desc
          img
          issuer
          liked
          title
          vid_id
        }
      }
    `;
    return processRequest(token, query, "WatchedVideos", {});
}

export async function getLikedVideos(token: string) {
    const query =
        `query LikedVideos {
            youflix_user_videos(where: {liked: {_eq: true}}) {
                desc
                img
                issuer
                liked
                title
                vid_id
            }
        }`;
    return processRequest(token, query, "LikedVideos", {});
}

export async function getVideoByID(token: string, id: string) {

    const query =
        `query VideoData {
            youflix_user_videos(where: {vid_id: {_eq: "${id}"}}) {
              desc
              img
              liked
              title
              vid_id
            }
          }
          `;

    return processRequest(token, query, "VideoData", {});
}

async function processRequest(token: string, query: string, queryName: string, variables: { [key: string]: any }) {
    const response = await fetchGraphQL(token, query, queryName, variables);

    if (!response['errors']) {
        return response;
    }
    return response['errors'];
}




async function fetchGraphQL(token: string, operationsDoc: string, operationName: string, variables: { [key: string]: any }) {
    if (!HASURA_URL) return;//TODO: or do w/e need its late and im lazy 
    const result = await fetch(
        HASURA_URL,
        {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                query: operationsDoc,
                variables: variables,
                operationName: operationName
            })
        }
    );
    return await result.json();
}


async function likeUnlike(like: boolean, token: string, vidData: ClipData) {
    const query =
        `
    mutation LikeUnlike {
        update_youflix_user_videos(
            where: 
            {
                vid_id: {
                _eq: ${vidData.id}
                }
            }, 
                _set: {
                    liked: ${like}
            }
        ) {
            affected_rows
        }
    }    
    `

    return processRequest(token, query, "LikeUnlike", {});
}

export function createTokenData(metadata: MagicUserMetadata): HasuraToken {
    return {
        ...metadata,
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000 + 7 * 24 * 60 * 60), //7 days
        "https://hasura.io/jwt/claims": {
            "x-hasura-allowed-roles": ["user", "admin"],
            "x-hasura-default-role": "user",
            "x-hasura-user-id": `${metadata.issuer}`,
        },
    };
}

export const convertToClipData = (ob: any) => {
    return {
        id: ob["vid_id"],
        title: ob["title"],
        description: ob["desc"],
        imageUrl: ob["img"]
    }
}