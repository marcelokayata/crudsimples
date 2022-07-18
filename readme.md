
## Em /backend

Quando rodar pela primeira vez pegar o ip do computador:
1) ipconfig
2) selecionar o Endereço IPv4
3) colocar nos arquivos docker-compose.yaml e index.js
    a) Em docker-compose.yaml: 
        - MONGODB_CONNSTRING=mongodb://172.26.64.1:27017/Tododb
        - MONGODB_CONNSTRING=mongodb://seuIp:27017/Tododb
    b) Em index.js:
        mongoose.connect('mongodb://172.26.64.1:27017/Tododb');
        mongoose.connect('mongodb://seuIp:27017/Tododb');
4) docker build -t apibase:1.0 .

## Em /frontglobo
1) docker build -t frontglobo:1.0 .
Demorou uns 400 segundos(nesse demora um pouco)

## Em /crudsimples
1) docker-compose up
2) Esperar até o front abrir

