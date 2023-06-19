import mongoose from 'mongoose';

const {Schema} = mongoose;

const movieSchema = new Schema({
    code:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required: true
    },
    director:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        requiered:true
    },
    releaseYear:{
        type:Number,
        requiered:true
    }
})

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;