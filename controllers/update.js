import Movie from '../schemas/movie.js'


const updateMovieByName = async (req, res, next) => {

    try {
        console.log("Actualizando")
        const { code } = req.params;
        const { director, genre, releaseYear, title } = req.body;

        const movie = await Movie.findOne({ code});

        if (!movie) {
            return res.status(404).json({ message: "Pelicula no encontrada" })
        }

        movie.title = title
        movie.director = director;
        movie.genre = genre;
        movie.releaseYear = releaseYear;

        const updatedMovie = await movie.save();

        const response = {
            message: "Pelicula actualizada",
            movie: updatedMovie
        }

        res.json(response)
    }
    catch (error) {
        next(error)
    } finally {
        console.log("Actualizada!")
    }

}
export  {updateMovieByName};