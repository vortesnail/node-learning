module.exports = {
  root: process.cwd(),
  hostname: '127.0.0.1',
  port: 3005,
  compress: /\.(js|css|html|md)/,
  cache: {
    maxAge: 600,
    expires: true,
    cacheControl: true,
    lastModified: true,
    etag: true
  }
};
