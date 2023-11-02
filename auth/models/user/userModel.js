import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password:{type:String, required: true},
})

//const UserModel = mongoose.model("UserModel") || mongoose.model('UserModel', userSchema)

//if(mongoose.model && mongoose.model.UserModel){
//    UserModel = mongoose.model("UserModel")
//}
//else{
//    UserModel = mongoose.model('UserModel', UserSchema)
//}

let UserModel
try {
  UserModel = mongoose.model('UserModel')
} catch (error) {
  UserModel = mongoose.model('UserModel', userSchema)
}

export default UserModel