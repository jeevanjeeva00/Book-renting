const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        required : true,
        trim: true
    },
    desc:{
        type: String,
        required : true,
        trim: true
    },
    price:{
        type: Number,
        required : true,
        
    },
    author:{
        type: String,
        required : true,
    },
    category:{
        type: String,
        required : true,
    },

    pages:{
        type: Number,
        required : true,
    },
    rentCost:{
        type:Number,
        required: true
    },
    isAvailable:{
        type: Boolean,
        default: true
    },
    numberofCopy:{
        type:Number,
        required: true
    },
    rentedCopies:{
        type:Number,
        default: true
    },
    isbn:{
        type: String,
        default:""
    },
    image:{
        type:Object,
        default:{
            url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image"
    }},
    isActive:{
        type: String,
        default: true
    },
    
},{
    collection:'books',
    timestamps: true
})

module.exports = mongoose.model("book" , bookSchema)