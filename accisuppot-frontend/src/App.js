
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FooterComponent from './components/Header-Footer/FooterComponenet';
import HeaderComponent from './components/Header-Footer/HeaderComponent';
import ListUserComponent from './components/admin/ListUserComponent';
import AddUserComponent from './components/admin/AddUserComponent';


function App() {
  return (
    <div style={{ width: "100%" }} className="">
      <BrowserRouter>
        <HeaderComponent/>
            
          <div className= "container">
            <switch>

                <Routes>
                      
                  <Route path = "/users" element = { <ListUserComponent/> }></Route>
                  <Route path = "/add-user" element = { <AddUserComponent/> }></Route>
                  <Route path = "/edit-user/:id" element = { <AddUserComponent/> }></Route>

                </Routes>
            </switch>    
          </div>

        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
