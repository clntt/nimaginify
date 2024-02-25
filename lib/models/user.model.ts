// import { Document, Schema, model, Types } from 'mongoose';

// interface IUser extends Document {
//   clerkId : string | Number; 
//   username: string;
//   email: string;
//   password: string;
//   firstName?: string;
//   lastName?: string;
//   planId : number;
//   creditBalance : number;
//   photo : string; 
//   createdAt: Date;
//   updatedAt: Date;
// }

// const UserSchema = new Schema({
//   clerkId : { type : String, required : true, unique : true },
//   username: { type: String, required: true, unique: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   firstName: { type: String },
//   lastName: { type: String },
//   planId : { type : Number, default : 1 },
//   creditBalance : { type : Number, default : 10 },
//   photo : { type : String, required : true },
//   createdAt: { type: Date, default: Date.now },
//   updatedAt: { type: Date, default: Date.now },
// });

// const User = model<IUser>('User', UserSchema);

// export default User;


import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  photo: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  planId: {
    type: Number,
    default: 1,
  },
  creditBalance: {
    type: Number,
    default: 10,
  },
});

const User = models?.User || model("User", UserSchema);

export default User;