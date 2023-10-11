# YouFlix
Netflix imitation crated with NextJS and Youtube Api

- **NextJS** - https://nextjs.org/docs
- **Youtube API** 
  - used to get data about videos by keyword,
    - [link](https://developers.google.com/youtube/v3/docs/videos/list?hl=en&authuser=1&apix_params=%7B%22part%22%3A%5B%22snippet%2CcontentDetails%2Cstatistics%22%5D%2C%22chart%22%3A%22mostPopular%22%2C%22regionCode%22%3A%22US%22%7D&apix=true)
  - and to display youtube player (embeded one)
    - [link](https://developers.google.com/youtube/player_parameters?hl=pl&authuser=1#Manual_IFrame_Embeds)
- **MAGIC.LINK** Login (authentication/autorization) is implemented with usage of [Magic.link](https://magic.link) which implments passwordless login, it also returns **[DID](https://magic.link/docs/dedicated/introduction/decentralized-id)** *(Decentralized ID)*, which is later used to create JWT token to autheniticate **HASURA**
  - [magic usage with nextjs](https://magic.link/posts/magic-auth-next) (they have nice tutorials to get started - but hard to find ;) ) 
  - [front-end methods](https://magic.link/docs/dedicated/api-reference/client-side-sdks/web)
  - [node back-end (or nextjs API)](https://magic.link/docs/dedicated/api-reference/server-side-sdks/node)
- **HASURA** - service that provides GRAPHQL queries without need for server, it also has connection to [NEON.tech](https://neon.tech) which provides 1 free postgress db (online one)
  - hasura also using its own Engine makes it possible to autorize by headers - meaning if passed correct headers then only users that are allowed (configured) can select/insert etc. into db.
    - each select/insert etc. is seperately configured 
    - example: table has *id* and *name* in request add header: `x-Hasura-User-Id = "Amy"` , if permision are set that only if *x-Hasura-User-Id* is equal to Amy that rows are possible to be selected (meaning Amy can only see her own rows)
  - to use User (eg. only owned rows) Authorization
    - steps: 
      - We need JWT token which is signed, to create signed key: [go here](https://hasura.io/docs/latest/auth/authentication/jwt/#configure-hasura-jwt-mode) or [here - graphic but no info about what](https://hasura.io/docs/latest/auth/authentication/jwt/#hasura-cloud)
      - JWT token itself: [go here](https://hasura.io/docs/latest/auth/authentication/jwt/#example-decoded-payload)
        - also to test/create JWT https://jwt.io/#debugger-io
      - in project API - we can get all needed data including js code which is used to get data (for specific query)
    - Also: *[Without the **X-Hasura-Admin-Secret** header you will need to authenticate your requests as a user and role with either the **JWT** or webhook authentication methods.](https://hasura.io/docs/latest/auth/authentication/admin-secret-access/#admin-secret)* - that is why JWT tokeb above, (as secret can be used on server side but not on front-end)
- 