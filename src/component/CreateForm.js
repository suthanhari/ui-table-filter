import React, { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

function CreateForm() {
    const [values, setValues] = useState({});



    const handleChange = event => {
        setValues(values => ({ ...values, [event.target.name]: event.target.value })

        )
    }



    const handleSubmit = async (e) => {
        e.preventDefault()
        alert("success");
        setValues("")
        try {
            await axios.post("https://627658a9bc9e46be1a15c55a.mockapi.io/sample", values);
            console.log(values);
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <div className='container'>

                <form onSubmit={(e) => handleSubmit(e)}>

                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth >
                            <TextField className='mb-3' id="firstName" label="State" variant="outlined"
                                onChange={handleChange}
                                name="firstName"
                                value={values.firstName} />
                            

                            <Autocomplete
                                disablePortal
                                id="lastName"
                                options={top100Films}
                                renderInput={(params) => <TextField {...params} label="Last Name" />}
                                onChange={handleChange}
                                name="lastName"
                                value={values.lastName}
                            />


                        </FormControl>
                    </Box>
                    <button type='submit' className='btn mt-3 waves-effect waves-light  btn-info' data-toggle="modal" data-target="#submit"><i className='far fa-paper-plane'></i> Add</button>


                </form>
            </div>
        </>
    )
}

const top100Films = [
    { label: ' AF' },
    { label: '  AX' },
    { label: ' AL' },
    { label: ' DZ' },
    { label: ' AD' },
    { label: " AO" },
    { label: '  AI' },
    { label: '  AQ' },
    { label: '  AG' },
    { label: '  IN' },
    { label: '  AR' },
    { label: '  AM' },
    { label: '  AW' },
    { label: '  AU' },
    { label: '  AT' },
    { label: '  AZ' },

];


export default CreateForm