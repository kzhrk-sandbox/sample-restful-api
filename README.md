# Install

```
$ docker pull mongo
$ docker run --name sample -p 0.0.0.0:27017:27017 -d mongo
$ npm i
$ npm start
```

## Create user data

```
$ curl -X POST -d "name=hoge" http://localhost:3000/user
```

## Delete user data

```
$ curl -X DELETE -d "name=hoge" http://localhost:3000/user
```

## Update user data

```
$ curl -X PUT -d "name=fuga" http://localhost:3000/user/hoge
```

# LICENSE

[NYSL](http://www.kmonos.net/nysl/)