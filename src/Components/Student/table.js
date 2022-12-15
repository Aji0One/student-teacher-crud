import React,{useState} from "react";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Stdtable({state,setState,user,setId,setUser}){
    
    const navigate= useNavigate();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event,newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
     

 const getValue= (event) => {
    setId(event.target.innerText);

    setState(!state);
    
  }

  const onPopulateData = (id) => {
    navigate('/form');
    
  }


  const handleDelete = async (id) => {
    const response = await axios.delete(`https://632138b082f8687273ae2989.mockapi.io/guvi/crud/student/${id}`)
    const userData = user.filter((key) => key.id !== response.data.id)
    setUser(userData);
  }

  return(
    <>

      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Student Id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell> 
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Gender</TableCell>
                <TableCell align='right'>Mentor Id</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {user.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                <TableRow
                  key={row.id}

                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell align="right">{row.firstName}</TableCell>
                  <TableCell align="right">{row.lastName}</TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.gender}</TableCell>
                  <TableCell align="right"><Button variant="text" onClick={(event)=>{getValue(event)}}>{Math.floor(Math.random() *10)}</Button></TableCell>
                  <TableCell align="right"><Button variant="contained" style={{margin: "0px 5px"}} onClick={() => {onPopulateData(row.id)}} >Edit</Button>
                  <Button variant="outlined" onClick={() => handleDelete(row.id)}>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={user.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>:

      
              
    </>
  )
}

export default Stdtable;