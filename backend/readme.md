# Create Image on Docker File

`````` 
docker build -t apibase:1.0 .
``````

# Run Docker-Compose Mongo

`````````````````````
1) docker pull mongo
`````````````````````
````````````````````````````````````````````````````````````````
2) docker compose up
````````````````````````````````````````````````````````````````

# Access MongoDB local running Docker bash
````````````````````````````````````````````````````````````````
1) docker exec -it mongodb-local bash
2) mongo
3) use admin
6) show dbs
7) use banco
8) db.createCollection("teste")
9) exit
10) exit
````````````````````````````````````````````````````````````````

# Access local mongodb via mongoDB Compass

````````````````````````````````````````````````````````````````
String connection:

Find your ip on MACOS/Linux
ifconfig

Find your ip on ip windows
ipconfig
````````````````````````````````````````````````````````````````

# String connection
````
mongodb://AzureDiamond:hunter2@yourIP:27017
````