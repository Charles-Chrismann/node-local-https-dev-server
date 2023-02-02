# node-local-https-dev-server

This is a simple local https server.

It was initially created in order to be able to use certain js front-end functionalities which require the https protocol to operate, such as the browser sensor API. Connecting to this url will be considered non-private or dangerous by browsers.

## Setup

```
git clone https://github.com/Charles-Chrismann/node-local-https-dev-server.git
```

```
cd node-local-https-dev-server/
```

```
npm i
```

At this point the last thing you need to do is create certificate and its private key using [mkcert](https://github.com/FiloSottile/mkcert).

Install mkcert:
- On Windows with choco for example

```
choco install mkcert
```

- On macOS with Homebrew

```
brew install mkcert
brew install nss # if you use Firefox
```

- On Linux with Homebrew

```
// TODO => see https://github.com/FiloSottile/mkcert#linux
```

Once installed

```
mkcert -install
```

Then nvaigate to the root of the folder of this repo and run:

```
mkcert localhost
```

Two Files in .pem should now be created.If they are now already named like follow, rename the certificate as "localhost.pem" and the key as "localhost-key.pem", you can also modify app.js if you don't want to rename them.

Thats it ! Now you can put your html/css/js files in public/ folder. No need to update file path

PS: note that this repo is for now only for small projects and complex folder structure may not work.

To start the https server run

```
node ./app.js
```

You can access your project in `https://127.0.0.1:3000`