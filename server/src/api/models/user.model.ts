import { Schema, Document, model} from 'mongoose';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
  generateToken(): string;
}

const collectionName = 'user';

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
},{
  timestamps: true,
});

// hashing password for security before saving user model
// during registration
UserSchema.pre('save', async function(next){
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
    {_id: this._id, name: this.name},
    "my_jwt_secret",
    {expiresIn: '30d'});
  return token;
}

const UserModel = model<UserDocument>(collectionName, UserSchema); //declare collection name only once to allow mongoose to pluralize or add 's' to the collection name

export {UserModel};

/*
Resources:
1. https://www.dctacademy.com/blog/storing-an-array-of-objects-in-a-mongoose-field-a-guide
2. https://stackoverflow.com/questions/36999377/how-to-add-conditional-schema-based-on-other-field
*/
