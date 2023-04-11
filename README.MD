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

