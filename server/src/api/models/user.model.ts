import { Schema, Document, model} from 'mongoose';

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

import { checkSubset } from '../../helpers/methods';

import { filterData } from '../../helpers/variables';
const {roles} = filterData

import { superAdminExists } from '../../helpers/methods';


export interface UserDocument extends Document {
  _id?: string;
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
  roles: string[];
  img?: string;
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
  email: {type: String, required: true, unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "please provide valid email",
    ]},
  password: {type: String, required: true},
  roles: {type: [String], required: true},
  img: {type: String}
},
{
  timestamps: true,
});


UserSchema.pre('save', async function(next){
  // capitalize firstname
  if(this.firstname){
    const firstname = this.firstname;
    this.firstname = firstname[0].toUpperCase() + firstname.substring(1).toLowerCase();
  }
  
  // capitalize lastname
  if(this.lastname){
    const lastname = this.lastname;
    this.lastname = lastname[0].toUpperCase() + lastname.substring(1).toLowerCase();
  }

  // check if roles entered is valid.
  if (!checkSubset(roles, this.roles)){
    throw new Error('VALUE(S) provided is not supported for the roles property');
  }

  // ensure there's only one super admin
  if(this.username !== "super-admin" && superAdminExists){
    // check if roles property contains "super-admin"
    const includesSuperAdmin = this.roles.includes("super-admin");
    if(includesSuperAdmin){
      // throw and error that "super-admin" role is not allowed
      throw new Error('only one super-admin can exist in database');
    }
  }

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
