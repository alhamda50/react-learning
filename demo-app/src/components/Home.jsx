import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Home = () => {
    const rows = [
        {
          movieId: 1,
          name: "Inception",
          releaseDate: "2010-07-16",
          category: "Sci-Fi",
          director: "Christopher Nolan",
          lang: "English"
        },
        {
          movieId: 2,
          name: "Parasite",
          releaseDate: "2019-05-30",
          category: "Thriller",
          director: "Bong Joon-ho",
          lang: "Korean"
        },
        {
          movieId: 3,
          name: "Spirited Away",
          releaseDate: "2001-07-20",
          category: "Animation",
          director: "Hayao Miyazaki",
          lang: "Japanese"
        },
        {
          movieId: 4,
          name: "The Dark Knight",
          releaseDate: "2008-07-18",
          category: "Action",
          director: "Christopher Nolan",
          lang: "English"
        },
        {
          movieId: 5,
          name: "Amélie",
          releaseDate: "2001-04-25",
          category: "Romantic Comedy",
          director: "Jean-Pierre Jeunet",
          lang: "French"
        }
      ];
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  sx={{fontWeight: 'bold'}}>Movie ID</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Name</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Release Date</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Category</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Director</TableCell>
            <TableCell sx={{fontWeight: 'bold'}} align="center">Language</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.movieId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.movieId}
              </TableCell>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.releaseDate}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.director}</TableCell>
              <TableCell align="center">{row.lang}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Home