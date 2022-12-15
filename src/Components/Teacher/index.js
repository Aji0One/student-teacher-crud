import React ,{useState} from "react";

import "./index.css";
import { Button } from "@mui/material";
import TableMen from "./table";
import Form from "./form";

function Teacher() {

    let formContent = {
        id:"",
        name: "",
        subject: "",
        gender: "",
        phonenumber:"",
        
        error:{
          name: "",
          subject: "",
          gender: "",
          phonenumber:"",
        }
      }

      const [formData, setFormData] = useState(formContent);
    const [state,setState] = useState(true);
    const handleState= () => {
        setState(!state);
    }

    return(
        <>
        <div className="dashboard">
                    
                    <div className="main">
                        <Button vairant="contained" onClick={handleState}>{state ? "Create Mentor" : "View Mentors"}</Button>
                        <div className="main-container">
                            { state ?  <TableMen change={state} changes={setState} formData={ formData} setFormData={ setFormData} />
                            : <Form formData={ formData} setFormData= { setFormData} formContent={ formContent} change={state} changes={setState} /> }
                           
                    
                    </div>
                </div>
        </div>
        </>
    );
}

export default Teacher;