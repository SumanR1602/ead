const mongoose = require("mongoose");

const url = 'mongodb://localhost:27017/mydb'; 
const connectDB = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to DB');
    } catch (error) {
        console.log(error);
    }
};

const UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const Model = mongoose.model("User", UserSchema); 
console.log(Model);

connectDB();


const userCreate = async () => {
    const user = await Model.create({ name: 'John', age: 1 });
    console.log(user);
    console.log('User created');
};

const userFind = async () => {
    const users = await Model.find();
    console.log(users);
    console.log('Find completed');
};

const userFindById = async () => {
    const user = await Model.findById('66f281a09a307df8dc0c1e54'); 
    console.log(user);
    console.log('FindById completed');
};

const userFindByIdAndUpdate = async () => {
    const user = await Model.findByIdAndUpdate('66f281a09a307df8dc0c1e54', { age: 5 }, { new: true }); 
    console.log(user);
    console.log('Find and update completed');
};

const userFindByIdAndDelete = async () => {
    const user = await Model.findByIdAndDelete('66f281a09a307df8dc0c1e54'); 
    console.log(user);
    console.log('Find and delete completed');
};

userCreate();
userFind();
userFindById();
userFindByIdAndUpdate();
userFindByIdAndDelete();
