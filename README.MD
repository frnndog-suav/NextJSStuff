
## Observations 
- Trailling slashes (next.config.js)
- Google analytics


### Static
- Build time (server environment)
- Default behaviour
- `npm run export`

### Static site generation [SSG]
- Build time (server environment)
- getStaticProps
	- revalidate (needs to be run with `npm run build && npm run start`)
- Incremental static regeneration (needs to be run with `npm run build && npm run start`)
	- fallback
### Server side rendering [SSR]
- getServerSideProps
- API routes

---

### **getStaticProps**  (Static site generation - SSG)
- **getStaticProps** runs in build time and dev mode.
-  The content is loaded directly on the static files. This means that the content will be loaded instantly (+performance).
-  ***getStaticProps*** is meant for static websites (the "*out*" folder). The content will never be changed.
-  **getStaticProps** is run in build.
>```js
>export async function getStaticProps() {
>  const res = await fetch('https://.../posts')
>  const posts = await res.json()
>  return {
>    props: {
>      posts,
>    },
>    // Next.js will attempt to re-generate the page:
>    // - When a request comes in
>    // - At most once every 10 seconds
>    revalidate: 10, // In seconds
>  }
>}
>```

### **getStaticPaths** (Static site generation - SSG)
- Next.js will statically pre-render all the paths specified
- Fallback
>```js
>export async function getStaticPaths() {
>   return {
>      paths: [] // you can preache your pages here (the most important ones for example.
>      fallback: 'blocking'     // 'fallback === false' is on demand generation
>   }
>}
>```
### npm export (Static site generation - SSG)
- Used when all your pages are pre-rendered
- By executing this command, a new build will be generated without all HTML and CSS files in order to get a simplified version of the project.

### Simulating a deploy of *out* folder as a final build (Static rendering)
- Create the below script on package.json file:
>```JSON
>"scripts":{
>   "start:staic": "npx http-server ./out -c-1"
>}
>```

### **getServerSideProps** (Server side rendering - SSR)
- **getServerSideProps** runs everytime a request is sent to the server and in and dev mode.
- Runs at server level.
>Embedded redirection
>```js
>export async function getServerSideProps(context) {
>   return {
>      redirect: {
>         permanent: false,
>         destination: '/status=401'    // home page with 'status' param in url
>      }
>   }
>}
>```

### Incremental Static Regeneration (ISR)
- A page will be generated once and it'll be static until the next build

## Resources
### Starting project from scratch
Execute the following commands in order: 
- `npm init -y`
- `npm install next react react-dom`
- Paste the following lines in `package.json`:
>```json
>"scripts": {
>  "dev": "next dev",
>  "build": "next build",
>  "start": "next start",
>  "lint": "next lint"
>}
>```
- Create git ignore with `npx gitignore node`

### Styling your page/component
>```jsx
><React.Fragment>
><style>
>{`
>   font-family: sans-serif
>`}
></style>
></React.Fragment>
>```

### Dynamic routes
- The component below is inside `pages/post`
>```jsx
>import { useRouter } from  "next/router";
>export  default  function  Post() {
>const  router  =  useRouter();
>
>return (
>   <React.Fragment>
>      <div>
>      Slug na página é <b>{router.query.seuSlug}</b>
>      </div>
>   <Link  
>      href={"/"} 
>      prefetch={false}     //avoid prefetching page 
>   >Ir para home</Link>
>   </React.Fragment>
>   );
>}
>```

### next/Link
- **Only** the elements that were changed/updated are loaded in the page
- Link prefetch 

### Dynamic import
>```jsx
>import dynamic from 'next/dynamic'
>
>const DynamicHeader = dynamic(() => import('../components/header'), {
>  loading: () => <p>Loading...</p>,
>})
>
>export default function Home() {
>  return <DynamicHeader />
>}
>```

### API Routes
- Only works with `npm build && npm start` (runs only in server)
- Fake api
- Same folder/file structure from `page` folder
- 
