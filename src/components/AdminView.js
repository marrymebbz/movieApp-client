import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
<<<<<<< HEAD
=======
import AddMovie from './AddMovie';
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d

export default function AdminView({ moviesData, fetchData }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        console.log(moviesData);

        const moviesArr = moviesData.map(movie => {
            return (
                <tr key={movie._id}>
                    <td>{movie._id}</td>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td>{movie.description}</td>
<<<<<<< HEAD
                    <td>{movie.genre}</td>
=======
                    <td>{movie.genre}</td>                  
                    <td><AddMovie movie={movie} fetchData={fetchData}/> </td>
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
                </tr>
            );
        });

        setMovies(moviesArr);

    }, [moviesData, fetchData]);

    return (
        <>
            <h1 className="text-center my-4">Admin Dashboard</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center bg-info">
                        <th className="bg-info-subtle text-info-emphasis text-center">ID</th>
                        <th className="bg-info-subtle text-info-emphasis">Title</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Director</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Year</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Description</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Genre</th>
<<<<<<< HEAD
=======
                        <th colSpan="2" className="bg-info-subtle text-info-emphasis text-center">Actions</th>
>>>>>>> 4d3fa02957dab91a0267f09b0d78d42a124ba86d
                    </tr>
                </thead>
                <tbody className="text-center">
                    {movies}
                </tbody>
            </Table>
        </>
    );
}