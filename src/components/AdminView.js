import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

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
                    <td>{movie.genre}</td>
                </tr>
            );
        });

        setMovies(moviesArr);

    }, [moviesData, fetchData]);

    return (
        <>
            <h1 className="text-center mt-4 mb-2">Admin Dashboard</h1>
            <Table striped bordered hover responsive>
                <thead>
                    <tr className="text-center bg-info">
                        <th className="bg-info-subtle text-info-emphasis text-center">ID</th>
                        <th className="bg-info-subtle text-info-emphasis">Title</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Director</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Year</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Description</th>
                        <th className="bg-info-subtle text-info-emphasis text-center">Genre</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {movies}
                </tbody>
            </Table>
        </>
    );
}