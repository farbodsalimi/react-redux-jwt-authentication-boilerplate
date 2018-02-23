### React-Redux JWT Authentication Boilerplate

# What is JSON Web Token?
![jwt](https://cdn.auth0.com/content/jwt/jwt-diagram.png)

JSON Web Token (JWT) is an open standard ([RFC 7519](https://tools.ietf.org/html/rfc7519)) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA.

Sourse: [Introduction to JSON Web Tokens](https://jwt.io/introduction/)

# Client
### Installation
```
yarn install
```

### Development
```
yarn start
```

### Production

First build the project, then run the server.
```
yarn build
```

# Server

### Run
with node
```
node server/
```

with nodemon
```
nodemon server/
```

with PM2
```
pm2 start server/
pm2 monit
```
