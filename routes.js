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

let user = mongoose.model('User_Collection', userSchema);