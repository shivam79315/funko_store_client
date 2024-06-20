
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';



function App() {
  
  return (
    <> 
 <Router>
  <Routes>
    <Route path='/HomePage'  element={<HomePage  />} />
    <Route path='/SignUp'  element={<SignUp  />} />
    <Route path='/login' element={<Login />} />
  </Routes>
  <ToastContainer />
 </Router>
  </>
  )
}

export default App
