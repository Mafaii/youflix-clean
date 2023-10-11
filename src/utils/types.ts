import { MagicUserMetadata } from "@magic-sdk/admin"

export interface ClipData {
  id: string, //videoId
  title: string,
  description: string,
  published: string,
  imageUrl: string,
  statistics?: {
    viewCount: string,
    likeCount: string
  }
}

export interface HasuraClipData extends ClipData {
  liked: boolean,
}

// export interface MagicLinkMetaData {
//   issuer: string,//: The Decentralized ID of the user. We recommend this value to be used as the user ID in your own tables.
//   publicAddress: string,//: The authenticated user's public address (a.k.a.: public key). Currently, this value is associated with the Ethereum blockchain.
//   email: string | null,// Email address of the authenticated user.
//   oauthProvider: string | null,//: OAuth of the authenticated user.
//   phoneNumber: string | null//: Phone number of the authenticated user.
// }


export interface HasuraToken extends MagicUserMetadata {

  iat: number,
  exp: number,
  "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": Array<string>,
    "x-hasura-default-role": string,
    "x-hasura-user-id": string,
  }
}

/**
 * 
 * 
 * {
      "kind": "youtube#searchResult",
      "etag": "iwsq24ZT8LdEotAJs5J5K7catTM",
      "id": {
        "kind": "youtube#video",
        "videoId": "VZnjWF3NKCA"
      },
      "snippet": {
        "publishedAt": "2023-08-08T11:00:32Z",
        "channelId": "UCzcQOTuXYGuCvTekySb_CeQ",
        "title": "Best Day Of The Year – Uluwatu",
        "description": "Uluwatu has had some fine form lately, but this session from a few days ago takes the cake. Super glassy conditions early ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VZnjWF3NKCA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VZnjWF3NKCA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VZnjWF3NKCA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Surfers of Bali",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-08T11:00:32Z"
      }
    },
 * 
 * error by google
 * {
  "error": {
    "code": 400,
    "message": "'nature'",
    "errors": [
      {
        "message": "'nature'",
        "domain": "youtube.part",
        "reason": "unknownPart",
        "location": "part",
        "locationType": "parameter"
      }
    ]
  }
}
 * 
 * 
 * 
 * {
  "error": {
    "code": 403,
    "message": "The request is missing a valid API key.",
    "errors": [
      {
        "message": "The request is missing a valid API key.",
        "domain": "global",
        "reason": "forbidden"
      }
    ],
    "status": "PERMISSION_DENIED"
  }
}
 */


/**
 * 
 * {
  "kind": "youtube#searchListResponse",
  "etag": "XQ_-eAT1PI0N3fLZz-1ukPvpZ1M",
  "nextPageToken": "CBkQAA",
  "regionCode": "PL",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 25
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "mCffhfqodnqwCqG98DTSSEo35p8",
      "id": {
        "kind": "youtube#video",
        "videoId": "b_q5GhinG10"
      },
      "snippet": {
        "publishedAt": "2023-08-07T20:00:11Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "BEST SURF TRIP OF MY LIFE!",
        "description": "STAY PSYCHED MERCHANDISE: https://staypsyched.com - JAMIE O'BRIEN SURF SCHOOL: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/b_q5GhinG10/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/b_q5GhinG10/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/b_q5GhinG10/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-07T20:00:11Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "iwsq24ZT8LdEotAJs5J5K7catTM",
      "id": {
        "kind": "youtube#video",
        "videoId": "VZnjWF3NKCA"
      },
      "snippet": {
        "publishedAt": "2023-08-08T11:00:32Z",
        "channelId": "UCzcQOTuXYGuCvTekySb_CeQ",
        "title": "Best Day Of The Year – Uluwatu",
        "description": "Uluwatu has had some fine form lately, but this session from a few days ago takes the cake. Super glassy conditions early ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VZnjWF3NKCA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VZnjWF3NKCA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VZnjWF3NKCA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Surfers of Bali",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-08T11:00:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Jz_ttFwioxx3cLBlhl-rgzk_YS0",
      "id": {
        "kind": "youtube#video",
        "videoId": "3UjUiYhLLh4"
      },
      "snippet": {
        "publishedAt": "2023-08-08T08:30:08Z",
        "channelId": "UCoicMEw3njXscfwHlaAJVcQ",
        "title": "SURFING A RIGHT HAND REEF BREAK UP THE COAST!",
        "description": "I finally went away in my van to a place up north! Here's some POV and beach footage from my first session For Online Surf ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/3UjUiYhLLh4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/3UjUiYhLLh4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/3UjUiYhLLh4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Surfing With Noz",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-08T08:30:08Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "WelMYhDTtR4cp5vLVqHuSApEqhc",
      "id": {
        "kind": "youtube#video",
        "videoId": "ma67yOdMQfs"
      },
      "snippet": {
        "publishedAt": "2021-01-23T17:00:15Z",
        "channelId": "UC--3c8RqSfAqYBdDjIG3UNA",
        "title": "These Were The All-Time Surfing Moments Of The Year | Best Of 2020",
        "description": "Well, that was a weird ride. Though it hasn't been easy, at least when we fixed our gaze on the ocean — or favorite place in the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ma67yOdMQfs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ma67yOdMQfs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ma67yOdMQfs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Red Bull Surfing",
        "liveBroadcastContent": "none",
        "publishTime": "2021-01-23T17:00:15Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "zROYSF8xH18lFWrWv1tuSJofcbs",
      "id": {
        "kind": "youtube#video",
        "videoId": "eSWST13stO4"
      },
      "snippet": {
        "publishedAt": "2022-03-27T15:00:32Z",
        "channelId": "UCVo06dBGK9VBBhq15wJxZHQ",
        "title": "🔵4k (ASMR) 10 Hour Store Loop - Hawaii Surfing - With Relaxing Music☑️",
        "description": "Waves of the World Filmers: Chris Kincade: https://www.instagram.com/chriskincade.wotw Andre Botha: ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/eSWST13stO4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/eSWST13stO4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/eSWST13stO4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Waves of the World",
        "liveBroadcastContent": "none",
        "publishTime": "2022-03-27T15:00:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "xMRjpZDzAyfVr5Q1y6RDt8WB_Nw",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UChuLeaTGRcfzo0UjL-2qSbQ"
      },
      "snippet": {
        "publishedAt": "2007-03-07T15:08:16Z",
        "channelId": "UChuLeaTGRcfzo0UjL-2qSbQ",
        "title": "World Surf League",
        "description": "Watch all the latest content of the world's best surfers, from Gabriel Medina and Carissa Moore to John John Florence and ...",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/vvEsvbve4XQz8aNgMX4qNVvKxecCM7oWoJkFwzbfM6x8Zkx_xinMjDRVG5Epu90ENYb4FvE-=s88-c-k-c0xffffffff-no-rj-mo"
          },
          "medium": {
            "url": "https://yt3.ggpht.com/vvEsvbve4XQz8aNgMX4qNVvKxecCM7oWoJkFwzbfM6x8Zkx_xinMjDRVG5Epu90ENYb4FvE-=s240-c-k-c0xffffffff-no-rj-mo"
          },
          "high": {
            "url": "https://yt3.ggpht.com/vvEsvbve4XQz8aNgMX4qNVvKxecCM7oWoJkFwzbfM6x8Zkx_xinMjDRVG5Epu90ENYb4FvE-=s800-c-k-c0xffffffff-no-rj-mo"
          }
        },
        "channelTitle": "World Surf League",
        "liveBroadcastContent": "upcoming",
        "publishTime": "2007-03-07T15:08:16Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "t-CRySMkSVu8shaTaRq83YnIMdI",
      "id": {
        "kind": "youtube#video",
        "videoId": "YkRf_MfN5ck"
      },
      "snippet": {
        "publishedAt": "2023-08-09T05:36:46Z",
        "channelId": "UCe_ZLwzh-73vuzoZesJJgkw",
        "title": "Never Too Old To Surf",
        "description": "Surfing at 68: Karen's Ocean Odyssey* \u200d♀️ #NeverTooOldToSurf Join us on a transformative journey with Karen, ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/YkRf_MfN5ck/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/YkRf_MfN5ck/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/YkRf_MfN5ck/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Ombe Surf",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-09T05:36:46Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "sxgUjOhcMF34i3s502HDQdkVNbM",
      "id": {
        "kind": "youtube#video",
        "videoId": "VD5IMdpDMUY"
      },
      "snippet": {
        "publishedAt": "2023-08-01T18:31:12Z",
        "channelId": "UCwMV2FVARycp5_p665_eyZg",
        "title": "REPEATER || A QUIKSILVER SURF FILM",
        "description": "Repeater is the new surf movie by Quiksilver with surfing by Mikey Wright, Rolo Montes, Griffin Colapinto, Kael Walsh, Al Cleland ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/VD5IMdpDMUY/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/VD5IMdpDMUY/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/VD5IMdpDMUY/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Quiksilver",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-01T18:31:12Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "3exRlwFdDkM8JgIwTrBb_lALKnw",
      "id": {
        "kind": "youtube#video",
        "videoId": "zZqxPozl2Ec"
      },
      "snippet": {
        "publishedAt": "2023-01-24T07:00:09Z",
        "channelId": "UCEUYW6zm6KnUxPcwY1D8HsQ",
        "title": "Surfing Massive Waves Waimea Bay (Jan 22, 2023)  4K",
        "description": "What occurred on January 22, 2023, at Waimea Bay on the North Shore of Oahu is nothing short of historical. We're simply doing ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/zZqxPozl2Ec/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/zZqxPozl2Ec/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/zZqxPozl2Ec/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Eimy’s Hawaii Happy life 🏄🏻",
        "liveBroadcastContent": "none",
        "publishTime": "2023-01-24T07:00:09Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "dnUQmJFHZt82hS3MkGF4-5htvDQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "yo4DlDM0A4k"
      },
      "snippet": {
        "publishedAt": "2023-08-09T15:00:49Z",
        "channelId": "UChuLeaTGRcfzo0UjL-2qSbQ",
        "title": "How The Most Critical Wave On Earth Works | Virtual Eye Shiseido Tahiti Pro Presented by Outerknown",
        "description": "Dive into the mechanics of how one of the world's most critical waves breaks some and crowns others. Watch the Shiseido Tahiti ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/yo4DlDM0A4k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/yo4DlDM0A4k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/yo4DlDM0A4k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "World Surf League",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-09T15:00:49Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "DIrD4AxLsX3t_2BGqYx1AUMlA1c",
      "id": {
        "kind": "youtube#video",
        "videoId": "5FKybfInCw4"
      },
      "snippet": {
        "publishedAt": "2023-08-08T15:00:02Z",
        "channelId": "UCm9NnEJTi7_B86QWgQiUCJA",
        "title": "Surfing a ROGUE Wave #shorts",
        "description": "Experience the pure exhilaration of riding waves as Koa Smith takes on the ocean's might in an extraordinary surf session!",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/5FKybfInCw4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/5FKybfInCw4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/5FKybfInCw4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Koa Smith",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-08T15:00:02Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "8E2gzNTy2NUxz1wqhoRfsPvg4Xk",
      "id": {
        "kind": "youtube#channel",
        "channelId": "UCKo-NbWOxnxBnU41b-AoKeA"
      },
      "snippet": {
        "publishedAt": "2005-11-02T06:29:47Z",
        "channelId": "UCKo-NbWOxnxBnU41b-AoKeA",
        "title": "SURFER",
        "description": "We founded SURFER Magazine with a mission: to bring our readers a slice of the entire surfing world with each issue. And for ...",
        "thumbnails": {
          "default": {
            "url": "https://yt3.ggpht.com/ytc/AOPolaTZS_TJ8dOMI54jZlyGuZAH1Cu-ckL_2qDHEzjumqE=s88-c-k-c0xffffffff-no-rj-mo"
          },
          "medium": {
            "url": "https://yt3.ggpht.com/ytc/AOPolaTZS_TJ8dOMI54jZlyGuZAH1Cu-ckL_2qDHEzjumqE=s240-c-k-c0xffffffff-no-rj-mo"
          },
          "high": {
            "url": "https://yt3.ggpht.com/ytc/AOPolaTZS_TJ8dOMI54jZlyGuZAH1Cu-ckL_2qDHEzjumqE=s800-c-k-c0xffffffff-no-rj-mo"
          }
        },
        "channelTitle": "SURFER",
        "liveBroadcastContent": "upcoming",
        "publishTime": "2005-11-02T06:29:47Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "XCUBUuOA5lDe4f91eVx0W7ZWu5Y",
      "id": {
        "kind": "youtube#video",
        "videoId": "W3AjAGEbZG4"
      },
      "snippet": {
        "publishedAt": "2023-08-08T20:40:35Z",
        "channelId": "UCQ5kqUO7Pkc7YWRNnjetfbw",
        "title": "Feels Like Surfing on A Skateboard!",
        "description": "Blair tests out a skateboard looking surfboard at the @lakesidesurfchelan standing wave. Lakeside Surf is the largest City Wave in ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/W3AjAGEbZG4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/W3AjAGEbZG4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/W3AjAGEbZG4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Skid Kids",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-08T20:40:35Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "k-8DzBAjUTZOZsebdTgvwCKIBKQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "nU4eMemthGE"
      },
      "snippet": {
        "publishedAt": "2023-08-05T16:25:18Z",
        "channelId": "UCm9NnEJTi7_B86QWgQiUCJA",
        "title": "PUMPING PADANG CUP W/ MASON HO, CLAY MARZO, TAJ BURROW!!! (SURFING EXPRESSION SESSION)",
        "description": "THE WAVES ARE PUMPING HERE IN INDONESIA AND THE WEEKLY VLOGS KEEP COMING!!! SUBSCRIBE TO THE ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/nU4eMemthGE/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/nU4eMemthGE/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/nU4eMemthGE/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Koa Smith",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-05T16:25:18Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5cEAQ_NYTkwVSaz863a7V6xttKU",
      "id": {
        "kind": "youtube#video",
        "videoId": "Iuy69BMHESM"
      },
      "snippet": {
        "publishedAt": "2023-05-10T19:00:13Z",
        "channelId": "UCVo06dBGK9VBBhq15wJxZHQ",
        "title": "🔴(ASMR) Teahupoo: The Ultimate Surfing Experience - April 2023",
        "description": "Welcome to Waves of the World We are not your typical surfing channel. Our dedicated filmers from around the world produce the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Iuy69BMHESM/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Iuy69BMHESM/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Iuy69BMHESM/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Waves of the World",
        "liveBroadcastContent": "none",
        "publishTime": "2023-05-10T19:00:13Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "zUOmERtmhZkdAY-du6EnZ_5hehE",
      "id": {
        "kind": "youtube#video",
        "videoId": "OXjwpayBBZs"
      },
      "snippet": {
        "publishedAt": "2023-08-04T09:12:40Z",
        "channelId": "UC0xgSf0VOxsp8e2TQh-WrzQ",
        "title": "The Skeleton Bay Shootout | Surf Contest At The Best Wave In The World",
        "description": "The Skeleton Bay Shootout presented by Monster Energy took place over three days in late June in non-stop three-to-six foot ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/OXjwpayBBZs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/OXjwpayBBZs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/OXjwpayBBZs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Now Now Media",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-04T09:12:40Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "DC5_torGnMFRf4gEKbjqQyvVV4M",
      "id": {
        "kind": "youtube#video",
        "videoId": "xWUnQ_tr94o"
      },
      "snippet": {
        "publishedAt": "2023-02-21T06:08:52Z",
        "channelId": "UCLdPicN16eAKPKir8EY1UXQ",
        "title": "INSANE FIJI GLASS RAW POV SURF SESSION",
        "description": "I surfed and recorded this raw POV surf session in Fiji whilst on a private coaching week with some epic students. The sun came ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/xWUnQ_tr94o/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/xWUnQ_tr94o/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/xWUnQ_tr94o/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Kale Brock",
        "liveBroadcastContent": "none",
        "publishTime": "2023-02-21T06:08:52Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "za-sXSsQWZMBhgKZoM3HnTj2cUc",
      "id": {
        "kind": "youtube#video",
        "videoId": "ALRoebu0Rgs"
      },
      "snippet": {
        "publishedAt": "2022-10-08T08:02:51Z",
        "channelId": "UCgrzEQkzzbWl6Sx_8DD1jiQ",
        "title": "What happened when I fall #surf #surfing #athlete #waves #surfers #skate #wsl #fit",
        "description": "",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/ALRoebu0Rgs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/ALRoebu0Rgs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/ALRoebu0Rgs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jake Abel",
        "liveBroadcastContent": "none",
        "publishTime": "2022-10-08T08:02:51Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "zUpJMa1LKnBdMMkhbsZYa30DvfI",
      "id": {
        "kind": "youtube#video",
        "videoId": "v0CFFIZqFXo"
      },
      "snippet": {
        "publishedAt": "2023-03-20T19:00:32Z",
        "channelId": "UCo_q6aOlvPH7M-j_XGWVgXg",
        "title": "A SURFERS DREAM IN HAWAII",
        "description": "AOKAI SWIM https://aokaiswim.com - STAY PSYCHED MERCHANDISE: https://staypsyched.com - JAMIE O'BRIEN SURF ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/v0CFFIZqFXo/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/v0CFFIZqFXo/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/v0CFFIZqFXo/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jamie O'Brien",
        "liveBroadcastContent": "none",
        "publishTime": "2023-03-20T19:00:32Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "SY_-OYk57tD2nxLcYXWalyhkZWk",
      "id": {
        "kind": "youtube#video",
        "videoId": "kKVBpA0dB9k"
      },
      "snippet": {
        "publishedAt": "2023-08-07T11:00:27Z",
        "channelId": "UCzcQOTuXYGuCvTekySb_CeQ",
        "title": "How A Local Reads The Lineup (Opening Scene) – Uluwatu",
        "description": "There were half a dozen surfers on his inside but local surfer, Sandi was able to still able to put himself in the best position to snag ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/kKVBpA0dB9k/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/kKVBpA0dB9k/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/kKVBpA0dB9k/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Surfers of Bali",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-07T11:00:27Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "5t4RdcaIDZTfZaUOMdEuQsmWMSs",
      "id": {
        "kind": "youtube#video",
        "videoId": "pmlzdeZuAk8"
      },
      "snippet": {
        "publishedAt": "2021-02-27T14:28:13Z",
        "channelId": "UCxkIzPnPzWLz4IeuxIROflg",
        "title": "What Surfing Is ACTUALLY Like as a Beginner",
        "description": "See what it's actually like to surf as a beginner, including why it's fun and why it kind of sucks at times! Click below to join the ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/pmlzdeZuAk8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/pmlzdeZuAk8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/pmlzdeZuAk8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Travis Marziani",
        "liveBroadcastContent": "none",
        "publishTime": "2021-02-27T14:28:13Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "bES7IfmYI3kHpTzibnBeqNqWY3I",
      "id": {
        "kind": "youtube#video",
        "videoId": "EYlHiTaCoks"
      },
      "snippet": {
        "publishedAt": "2023-04-28T18:00:07Z",
        "channelId": "UC--3c8RqSfAqYBdDjIG3UNA",
        "title": "Perfect Pipeline With Kai Lenny And The GOAT Kelly Slater!",
        "description": "Kelly Slater joins a surf super team at Pipeline with Kai Lenny and Carissa Moore for these pumping Da Hui Backdoor Shootout ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/EYlHiTaCoks/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/EYlHiTaCoks/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/EYlHiTaCoks/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Red Bull Surfing",
        "liveBroadcastContent": "none",
        "publishTime": "2023-04-28T18:00:07Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "Cz9fKLehTwj5UatCv-8q3-YxjMM",
      "id": {
        "kind": "youtube#video",
        "videoId": "asLkYuWLcRA"
      },
      "snippet": {
        "publishedAt": "2023-08-04T14:11:11Z",
        "channelId": "UCK_kztIv-vT7yPrziDrSMbA",
        "title": "Taj Burrow, Clay Marzo, Mason Ho,Miguel Blanco-PadangPadang/Bali Freesurfing 04/AUG/2023 RawFiles 4K",
        "description": "The first warm up/freesurf Session was hold today at PadangPadang Bali. The Rip Curl Cup Padang Padang providing an ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/asLkYuWLcRA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/asLkYuWLcRA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/asLkYuWLcRA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Surf Raw Files",
        "liveBroadcastContent": "none",
        "publishTime": "2023-08-04T14:11:11Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "VGdKl4E6UdngNMTd2bIMKap4u34",
      "id": {
        "kind": "youtube#video",
        "videoId": "RI8E5rcfBn4"
      },
      "snippet": {
        "publishedAt": "2023-04-27T23:00:12Z",
        "channelId": "UCH4NSjkEFF_wyLhc60eevhg",
        "title": "Paster — Surfing",
        "description": "Official music video of \"Surfing\" by Paster Subscribe on Synaps Records YouTube channel: https://mikpro.az/synapsrecordsyt ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/RI8E5rcfBn4/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/RI8E5rcfBn4/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/RI8E5rcfBn4/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Synaps Records",
        "liveBroadcastContent": "none",
        "publishTime": "2023-04-27T23:00:12Z"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "HLEBDOaUgA2q23rpH0RAZdQJtRQ",
      "id": {
        "kind": "youtube#video",
        "videoId": "DVgdcN8uitA"
      },
      "snippet": {
        "publishedAt": "2023-06-07T11:57:16Z",
        "channelId": "UCd5dgfpboQbApKvN4P3FWVw",
        "title": "Epic point surf in Mexico!",
        "description": "Went to southern Mexico to surf sand bottom, warm water point breaks. Cant believe how good it was! This is Part 1 Follow me on ...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/DVgdcN8uitA/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/DVgdcN8uitA/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/DVgdcN8uitA/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jackson Dorian",
        "liveBroadcastContent": "none",
        "publishTime": "2023-06-07T11:57:16Z"
      }
    }
  ]
}

 */