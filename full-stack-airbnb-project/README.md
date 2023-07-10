## Prisma setup of this project

 1. Run `npm i -D prisma`
 2. Run `npx prisma init`
 3. Update *schema.prisma* file content:
 >```prisma
>generator client {
>  provider = "prisma-client-js"
>}
>
>datasource db {
>  provider = "mongodb" //previous value was 'postgresql'
>  url      = env("DATABASE_URL")
>}
  >```
4. Create an account at [MongoDB](https://www.mongodb.com/atlas/database)
5. [Watch this video](https://www.youtube.com/watch?v=c_-b_isI4vg&t=1790s) to create a database (1:32:20 to 1:40:15)
6. 