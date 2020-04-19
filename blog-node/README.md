### nginx

```bash
server {
    listen 7070;
    server_name localhost;

    location / {
        # http server
        proxy_pass http://localhost:8001;
    }
    location /api {
        # node server
        proxy_pass http://localhost:8212;
        proxy_set_header Host $host;
    }
}
```

### http-server

```bash
> http-server -p 8001
```

### node

```bash
const http = require('http');

const PORT = 8212;
const serverHandle = require('../app');

const server = http.createServer(serverHandle);
server.listen(PORT);

# node xx.js
```

### redis-server

```bash
> redis-server
```

### redis-cli

```bash
> redis-cli
```

### Intnet
```bash
http://localhost:7070/login
```
