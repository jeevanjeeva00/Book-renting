const Book = require('../model/bookModel')


const  bookCtrl = {
    getAll : async(req,res) =>{
        try{
          const data = await Book.find({})
          return res.status(200).json({length: data.length, books: data})
        }catch(err){
            return  res.status(500).json({ msg: err.message})
        }
    },
    getSingle: async(req,res)=>{
        try{
           let id = req.params.id
           const data = await Book.findById({_id: id})
           return res.status(200).json({book: data})
        }catch(err){
            return  res.status(500).json({ msg: err.message})
        }
    },
    create: async(req,res) => {
        try{
                if(!req.body.isbn)
                    return res.status(404).json({msg:  `ISBN Number is required`})
                let extBook = await Book.findOne({isbn : req.body.isbn})
                    if(extBook)
                        return res.status(400).json({msg: `ISBN Code already allowcated...`})

            let newItem = await Book.create(req.body)
            return res.status(200).json({msg:"New Book Added Successfully" , book: newItem})
            
        }catch(err){
            return  res.status(500).json({ msg: err.message})
        }
    },
    update: async(req,res) => {
        try{
             let id = req.params.id
            let extBook = await Book.findById({ _id : req.params.id})

                if(!extBook)
                    return res.status(404).json({msg:`Requested book not found`})
 
            await Book.findByIdAndUpdate({_id: id},req.body)

            return res.status(200).json({msg:" Book updated Successfully"})


        }catch(err){
            return  res.status(500).json({ msg: err.message})
        }
    },
    delete: async(req,res) => {
        try{
            let id = req.params.id

            let extBook = await Book.findById({ _id : req.params.id})

                    if(!extBook)
                        return res.status(404).json({msg: `Requested id not found`})

                await Book.findByIdAndDelete({ _id: id})

            return res.status(200).json({ msg: "Book deleted succesfully"})
        }catch(err){
            return  res.status(500).json({ msg: err.message})
        }
    },
}

module.exports = bookCtrl