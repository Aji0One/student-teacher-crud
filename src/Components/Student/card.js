import { useContext } from "react";
import { ContextData } from "../../Context";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


function Cards({id}){
    const consumendData= useContext(ContextData);
    const Id= id;
    const mentDetails=consumendData.mentorData;
    const data=mentDetails.filter((val) => val.id===Id)
    
    
    return(
        <div className="container">
            <div className="row" style={{textAlign:'center', fontSize:"20px"}} >
                <div className="strength">
                    <span><h4>Total Student:{consumendData.studentStren}</h4></span>  
                    <span><h4>Total Mentor:{consumendData.mentorStren}</h4></span>
                </div>
                
                <div className="col-sm-5">
                <Box sx={{ width: 300 ,margin: '0 auto',fontSize:'18px'}}>
      <Card variant="outlined">
      <CardContent>
      
      <Typography variant="h5" component="div">
        Name: {data[0].name}
      </Typography>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Subject: {data[0].subject}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Experience: {data[0].experience}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Phone Number: {data[0].phonenumber}
      </Typography>
      <Typography variant="body2">
        Gender: {data[0].gender}
      </Typography>
    </CardContent>
        </Card>
    </Box>
                </div>
            </div>
        </div>
        
    )
}

export default Cards;