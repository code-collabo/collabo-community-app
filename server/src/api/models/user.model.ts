import { Schema, Document, model} from 'mongoose';

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// import { filterData } from '../../helpers/variables';
// const {roles} = filterData


export interface UserDocument extends Document {
  _id?: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  roles: string[];
  token?: string;
  createdAt?: Date;
  updatedAt?: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateToken(): string;
}

const collectionName = 'user';

const UserSchema = new Schema({
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  username: {type: String, required: true, unique: true},
  email: {type: String, unique: true},
  password: {type: String, required: true},
  roles: {type: [String], required: true}
},
{
  timestamps: true,
});


UserSchema.pre('save', async function(next){
  // Only run this function if password was moddified (not on other update functions)
  if (!this.isModified("password")){
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  return next();
})


// comparing password during login
UserSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const isMatch = await bcrypt.compare(candidatePassword, this.password);
  return isMatch;
}

// generating token during registration and logging in
UserSchema.methods.generateToken = function (): string {
  const token = jwt.sign(
    {_id: this._id, username: this.username, roles: this.roles},
    "my_jwt_secret",
    {expiresIn: '1h'});
  return token;
}


const UserModel = model<UserDocument>(collectionName, UserSchema); //declare collection name only once to allow mongoose to pluralize or add 's' to the collection name

export { UserModel };

/*
Resources:
1. https://www.dctacademy.com/blog/storing-an-array-of-objects-in-a-mongoose-field-a-guide
2. https://stackoverflow.com/questions/36999377/how-to-add-conditional-schema-based-on-other-field
*/
