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
