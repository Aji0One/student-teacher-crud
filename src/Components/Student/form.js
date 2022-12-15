import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

import { Button } from "@mui/material";
import axios from "axios";

function Form () {
    let formContent = {
        id:"",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        
        error:{
          firstName: "",
          lastName: "",
          email: "",
          gender: "",
        }
      }

      const [formData,setFormData]= useState(formContent);
      const [user,setUser] =useState([]);
      
      const handleChange= (e) => {
        let error = {...formData.error};
        if(e.target.value === ""){
          error[e.target.name] =`${e.target.name} is Required`;
        }
      else{
        error[e.target.name]=""
      }
        setFormData({...formData, [e.target.name] : e.target.value, error})
      }

      const handleSubmit = async (e) => {
    
        e.preventDefault();
        const errorKeys= Object.keys(formData).filter((key)=>{
          if(formData[key] === "" && key!=='error' && key!=='id')
            return key;
          
        } )
        if(errorKeys.length>=1){
          alert("Please fill all Details");
        }else{
          if(formData.id){
            //update
            const response = await axios.put(`https://632138b082f8687273ae2989.mockapi.io/guvi/crud/student/${formData.id}`,
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            gender: formData.gender,
            // courses: formData.courses,
          });
          let userData=[...user];
          let index=userData.findIndex((row)=> row.id === response.data.id);
          userData[index]=response.data;
          setUser(userData);
          }
          else{
            //create
            const response = await axios.post("https://632138b082f8687273ae2989.mockapi.io/guvi/crud/student",
          {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            gender: formData.gender,
          }
        )
        setUser([...user,response.data]);
        
          }
          setFormData(formContent);
        }
        
        
      };
    return(
        <>
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch'},
        }}
       
        autoComplete="off"
        style={{ padding: "20px" }}
        onSubmit={(e)=> handleSubmit(e)}
        
      >
        <h3 >Form</h3>
        <TextField id="firstName" 
        label="First Name" 
        name="firstName"
        variant="standard" 
        value={formData.firstName}
        onChange={(e)=>handleChange(e)}

        /><br />
        <span style={{color:"red"}}>{formData.error.name} </span>
        <br />

        <TextField id="lastName"
         label="Last Name" 
         name="lastName"
         variant="standard" 
         value={formData.lastName}
         onChange={(e)=>handleChange(e)}
        
         /><br />
         <span style={{color:"red"}}>{formData.error.age} </span>
         <br />
        <TextField id="email" 
        label="Email" 
        name="email"
        type="email"
        variant="standard" 
        value={formData.email}
        onChange={(e)=>handleChange(e)}
        
        /><br />
        <span style={{color:"red"}}>{formData.error.email} </span>
        <br /><br />

        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel><br />
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="gender"
          value={formData.gender}
        onChange={(e)=>handleChange(e)}
          
        >
          <FormControlLabel value="Female" control={<Radio />} label="Female" />
          <FormControlLabel value="Male" control={<Radio />} label="Male" />
          <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup><br/>
        <span style={{color:"red"}}>{formData.error.gender} </span>
       
        <Button variant="contained" type="submit">Submit</Button>
      </Box>
        </>
    );
}

export default Form;