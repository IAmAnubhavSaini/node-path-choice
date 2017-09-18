# node-path-choice

Get the path to the source directory and save it in env once.

Relative and absolute path are available.

Absolute: you can just set your path blatantly in process.env.NODE_PATH

## Usage

```JavaScript
    // put this in your index.js or app.js (just once in a project and that becomes root)
    require('node-path-choice').blatant(__dirname)
```

## This should replace rootpath node_module in your repo.

`rootpath()` is waste of cpu cycles. Use this instead.

## license

MIT
