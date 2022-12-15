import Navbar from './Components/Navbar/index'
import Student from './Components/Student/student';
import Teacher from './Components/Teacher/index';
import Dash from './Components/Dashboard/index';
import Form from './Components/Student/form'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Dash/>}/>
          <Route path='/student' element={<Student/>}/>
          <Route path='/mentor' element={<Teacher/>}/>
          <Route path='/form' element={<Form/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
      
    
  );
}

export default App;
