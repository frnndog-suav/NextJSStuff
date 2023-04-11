## Observations 
- Trailling slashes (next.config.js)
- Google analytics

### **getStaticProps**
- **getStaticProps** runs in build time and dev mode.
-  The content is loaded directly on the static files. This means that the content will be loaded instantly (+performance).
-  ***getStaticProps*** is meant for static websites (the "*out*" folder). The content will never be changed.
-  **getStaticProps** is run in build.

### **getServerSideProps**
- **getServerSideProps** runs everytime a request is sent to the server and in and dev mode.

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
>```json
><React.Fragment>
><style>
>{`
>   font-family: sans-serif
>`}
></style>
></React.Fragment>
>```
