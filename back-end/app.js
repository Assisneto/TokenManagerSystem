let app = require ('./app/config/express')();

let porta = process.env.PORT || 3000;
app.listen(porta, ()=> console.log("Servidor rodando"));
;