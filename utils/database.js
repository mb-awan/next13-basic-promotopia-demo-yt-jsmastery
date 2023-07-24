import mongoose from "mongoose";

let isConnected = false; // to track the connection status

export const connectionToDB = async () => {
  if (isConnected) {
    console.log("MongoDB is already connnected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error While Connecting to the database", { error });
  }
};
