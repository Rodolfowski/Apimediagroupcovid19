let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    RotasCachorro = require('./routes/registro.routes')
    app = express();

// Connectando ao banco MongoDb
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false)
mongoose.connect('mongodb://localhost/registroDb', {
   useNewUrlParser: true}).then(() => {
      console.log('Connectado com sucesso ao Banco de dados')
   },
   error => {
      console.log('O Banco de dados não pode ser conectado devido ao errro: ' + error)
   }
)
//Configurações do EXPRESS
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors());
app.use('/api', RotasCachorro)

// Disponibilizando servidor
const port = process.env.PORT || 8200;
const server = app.listen(port, () => {
  console.log('Connectado a porta ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// Tratando de outros erros
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

