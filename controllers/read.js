import Movie from '../schemas/movie.js'

const getMoviebyCode = async (req, res, next) => {
    console.log("Buscando")
    try{
        const {code} = req.params;

        const movie = await Movie.findOne({code});

        if(!movie){
            return res.status(404).json({message:"Pelicula no encontrada"})
        }

        res.json(movie)
    }catch(error){
        next(error);
    }finally{
        console.log("Encontrada!")
    }
}

export {getMoviebyCode}

