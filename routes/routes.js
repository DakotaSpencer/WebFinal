const dbPath = "mongodb+srv://JWilliams1233:9542715.Jw1233@cluster0.ujp1m.mongodb.net/Users?retryWrites=true&w=majority"

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(dbPath, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

let mdb = mongoose.connection;
mdb.on('error', console.error.bind(console, 'connection error'));

let userSchema = mongoose.Schema({
    username: String,
    /* password: String, (I think we need to get the password
         first then make a variable equaling that then 
         salt & hasing it then saving it)
    */
    email: String, 
    age: String,
});

let User = mongoose.model('User_Collection', userSchema);

exports.create = (req, res) => {
    res.render('createAccount', {
      title: 'Create an Account'
    })
    //Takes to page
};
  
exports.createPerson = (req, res) => {
    //Form used to get data
    //person passes in an object
    let user = new User({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
    });
  
    user.save((err, user) => {
      //returns err if theres an error
      if(err) return console.error(err);
  
      console.log(req.body.name + ' added.');
      //All that is needed to save this to a database
      //redirects back to the homepage
    });
    res.redirect('/');
  };