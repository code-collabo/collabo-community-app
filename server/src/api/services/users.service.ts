import { UserDocument, UserModel as User } from '../models/user.model';

const selectString = '_id name email password createdAt updatedAt';


type RegistrationDodument = Pick<UserDocument, "name" | "email" | "password">
type LoginDocument = Pick<UserDocument, "email" | "password">

export const registerOneUserService = async (requestBody: RegistrationDodument) => {
  const user = new User ({
    name: requestBody.name,
    email: requestBody.email,
    password: requestBody.password,
  })

  const save = await user.save();
  return save;
}



export const loginOneUserService = async (requestBody: LoginDocument) => {
  const {email, password} = requestBody;
  // check if email and password was provided
  if (!email && !password){
    throw new Error("Please provide email and password");
  }
  // check if the user is registered in the database
  const user = await User.findOne({email});
  if(!user){
    throw new Error("Invalid Credetials");
  }
  // check if correct password was provided
  const isPasswordCorrect = await user.comparePassword(password);
  if(!isPasswordCorrect) {
    throw new Error("invalid email or password");
  }
  return user;
}




export const getAllRegisteredUserService = async () => {
  const query = await User.find().select(selectString).exec();
  return query;
}




export const deleteOneUserService = async (paramsId: string) => {
  const query = await User.findOneAndDelete({ _id: paramsId }).exec();
  return query;
}