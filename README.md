This is demo repo to reproduce an error.

First, run the development server:

```bash
yarn && yarn dev
```

Error should occurs on `http://localhost:3000/todo/1`

```
TypeError: Cannot destructure property 'publicRuntimeConfig' of 'next_config__WEBPACK_IMPORTED_MODULE_3___default(...)(...)' as it is undefined.
    at getStaticPaths (/Users/jordid/GitHome/test-nextjs-config/.next/server/static/development/pages/todos/[id].js:174:5)
    at buildStaticPaths (/Users/jordid/GitHome/test-nextjs-config/node_modules/next/dist/build/utils.js:18:86)
    at Object.loadStaticPaths (/Users/jordid/GitHome/test-nextjs-config/node_modules/next/dist/server/static-paths-worker.js:8:140)
    at processTicksAndRejections (internal/process/task_queues.js:97:5) {
  type: 'TypeError'
}
```
