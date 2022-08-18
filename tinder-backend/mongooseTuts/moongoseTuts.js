const mongoose = require('mongoose');

async function main(){
    await mongoose.connect('mongodb://localhost:27017/vedantDB')
}

main().catch((err)=>{
    console.log(err);
})

const schema = new mongoose.Schema({
    name:String
})

// const silence = new kitten({ name: 'Silence' });
schema.methods.speak = function speak(){
    const greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
    console.log(greeting);
}
const kitten = mongoose.model('kitten',schema);
// console.log(silence.name);

const fluffy = new kitten({ name: 'Manzar Meowda' });
// fluffy.speak();
// console.log(fluffy.name)
const saveDB = async(funcName)=>{
    await funcName.save();
}
// saveDB(fluffy).catch(err=>{
//     console.log(err);
// })
// fluffy.speak();

const findData = async()=>{
    return await kitten.find();
}
// console.log(findData.);

const closeConnection = async ()=>{
    await mongoose.connection.close();
}
findData().then((data)=>{
    console.log(data);
    closeConnection();
})
