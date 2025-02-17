const mongoose = require("mongoose");

const MONGO_PASSWORD = encodeURIComponent('Mitali@18')

const DB = `mongodb+srv://singhmitali:${MONGO_PASSWORD}@cluster0.tayaz8x.mongodb.net/MinorProject?retryWrites=true&w=majority`;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(() =>{
    console.log(`Connection Successfull`);
}).catch((err) => {
    console.log(err);
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

logInSchema.add({
    age:{
        type: Number,
        required: true
    }
})

 const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

const SignUpSchema=new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    phonenumber:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    tanNumber:{
        type:String,
        required:true
    },
    panNumber:{
        type:String,
        required:true
    },
    organisationname:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zipcode:{
        type:String,
        required:true
    },

})
const SignUpCollection = new mongoose.model('SignUpCollection',SignUpSchema)

// module.exports=LogInCollection

const contactSchema = new mongoose.Schema({
    name1:{
        type:String
    },
    email1:{
        type:String
    },
    message:{
        type:String
    }
})
const ContactCollection = new mongoose.model('ContactCollection' ,contactSchema)
// module.exports = ContactCollection

const DonateFoodSchema = new mongoose.Schema({
    name3:{
        type:String
    },
    email3:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    },
    donationtype:{
        type:String
    },
    quantity:{
        type:String
    }
})

DonateFoodSchema.add({
    donated_at:{
        type: Date
    }
})

DonateFoodSchema.add({
    anonymous: {
        type: Boolean, // Assuming anonymous is a boolean field
        default: false // Default value is false, indicating not anonymous
    }
})

delete DonateFoodSchema.obj.pickup;
delete DonateFoodSchema.obj.datetime;



const DonateFoodCollection = new mongoose.model('DonateFoodCollection' ,DonateFoodSchema)
 

const VolunteerSchema = new mongoose.Schema({
        volname : {
            type : String,
            required: true
        },
        volemail : {
            type : String,
            required: true
        },
        volmsg : {
            type : String,
            required: true
        },
})

VolunteerSchema.add({
    message_at:{
        type: Date
    }
})

const VolunteerCollection = new mongoose.model('VolunteerCollection' ,VolunteerSchema)

module.exports = {
    LogInCollection,
    SignUpCollection,
    ContactCollection,
    DonateFoodCollection,
    VolunteerCollection
};
