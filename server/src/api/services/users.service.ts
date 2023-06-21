import { UserDocument, UserModel as User } from '../models/user.model';

const selectString = '_id firstname lastname username email password roles createdAt updatedAt';

type SignInDocument = Pick<UserDocument, "email" | "password">


export const createOneUserService = async (requestBody: UserDocument): Promise<UserDocument> => {

  const user = new User({
    firstname: requestBody.firstname,
    lastname: requestBody.lastname,
    username: requestBody.username,
    email: requestBody.email,
    password: requestBody.password,
    roles: requestBody.roles
  });
  const save = await user.save();
  return save;
};


export const signInOneUserService = async (requestBody: SignInDocument) => {
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
};


export const getAllUsersService = async () => {
  const query = await User.find({}).select(selectString).exec();
  return query;
};


export const getAdminUserService = async () => {
  const query = await User.findOne({username: "admin"}).select(selectString).exec();
  return query;
};


export const getOneUserService = async (paramsId: string) => {
  const query = User.findById(paramsId).select(selectString).exec();
  return query;
};


export const updateOneUserService = async (paramsId: string, requestBody: UserDocument) => {
  const query = await User.findOne({ _id: paramsId }).exec();
  const user = query as UserDocument;

  if(requestBody.firstname) user.firstname = requestBody.firstname;
  if(requestBody.lastname) user.lastname = requestBody.lastname;
  if(requestBody.username) user.username = requestBody.username;
  if(requestBody.email) user.email = requestBody.email;
  if(requestBody.password) user.password = requestBody.password;
  if(requestBody.roles) user.roles = requestBody.roles;

  const save = user.save();
  return save;
};


export const deleteOneUserService = async (paramsId: string) => {
  const query = await User.findOneAndDelete({ _id: paramsId }).exec();
  return query;
};


////////////////////////////////////////////////////////////
export const deleteAllUserService = async () => {
  const query = await User.deleteMany().exec();
  return query;
}
////////////////////////////////////////////////////////////