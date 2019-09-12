
const express = require('express');
const bodyParser = require('body-parser')
const path = require ('path')

const ippisRouter = require('./routes/ippis');

const app = express();

app.use(bodyParser.json())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
 app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-origin','*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers','Content-Type,Authorization')
  next()
})


app.use('/ippis',ippisRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


 app.listen(3010,()=>{
  console.log('Here you are')
})
  



module.exports = app;
