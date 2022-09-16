const mongoose = require('mongoose');

async function connect () {
try {
    await mongoose.connect("mongodb://localhost:27017/Thi's_blog");
    console.log("ok");
} catch (error) {
    console.log("ko")
}
}

module.exports =  {connect} ;