const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://maxthanit:20082544Max@cluster0.88mrfo3.mongodb.net/final_devtool', {
  useNewUrlParser: true,
}).then(()=>{
    
}).catch((eer)=>{
    console.log('someting wrong', eer)
})

