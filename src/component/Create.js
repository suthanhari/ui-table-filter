import { PersonAdd } from '@mui/icons-material';
import { Button, Paper, Typography, TextField } from '@mui/material';

import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css'





const columns = [

  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },



];


export default function Create() {






  const [tableData, setTableData] = useState([]);


  useEffect(() => {
    const fetch = async () => {
      let response = await axios.get("https://627658a9bc9e46be1a15c55a.mockapi.io/sample");
      setTableData(response.data);
    }
    fetch();
  }, [])


  const [searchInput, setSearchInput] = useState('');

  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearchItems = (searchValue) => {

    setSearchInput(searchValue)
    if (searchInput !== '') {
      const filteredData = tableData.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }
    else {
      setFilteredResults(tableData)


      
    }


  }


  return (



    <div className='container-fluid'>

      <div className='row mt-3 d-flex justify-content-center'>
        <div className='col-lg-8'>


          <Paper >
            <div id="toolbar">
              <Typography variant="h6" component="h2" color="primary">
                Users
              </Typography>
              <Button variant="outlined" color="secondary" startIcon={<PersonAdd />}>
                New User
              </Button>

              <TextField

                label="Search input"
                variant="standard"
                InputProps={{

                  type: 'search',
                }}
                value={searchInput}
                onChange={(e) => handleSearchItems(e.target.value)}
              />


            </div>
            <div style={{ height: 300, width: '100%' }}>
              {
                searchInput.length ? (
                  filteredResults.map((item) => {

                    return <DataGrid
                      rows={tableData}
                      columns={
                        columns
                      }
                      {...item.firstName
                      }{

                       ...item.lastName
                      }
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection

                    />
                  })
                ) : (
                  tableData.map((item) => {

                    return <DataGrid
                      rows={tableData}
                      columns=
                      {
                        columns
                      }
                      {...item.firstName

                      }{
                      ...item.lastName
                      }
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      checkboxSelection

                    />
                  })
                )
              }




            </div>
          </Paper >
        </div>
      </div>
    </div>


  )
}
