import { StrictMode } from 'react'
import Homepage from "./routes/Homepage.jsx"
import Write from "./routes/write.jsx"
import Login from "./routes/Login.jsx"
import Register from "./routes/Register.jsx"
import Postlist from "./routes/Postlist.jsx"
import Singlepostlist from "./routes/Singlepostpage.jsx"
import { createRoot } from 'react-dom/client'
import './index.css'
import Mainlayout from './layout/Mainlayout.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import {Provider} from "react-redux"
import {ToastContainer} from "react-toastify"
import {store,persistor} from './store.js'
import { PersistGate } from 'redux-persist/integration/react'
import Profile from './routes/Profile.jsx'
import Categorydetail from './components/Category/Categorydetail.jsx'
import { Addcategory } from './components/Category/Addcategory.jsx'
import Addblog from './components/Blog/Addblog.jsx'
import Editblog from './components/Blog/Editblog.jsx'
import Blogdetail from './components/Blog/Blogdetail.jsx'
import Blogbycategory from "./components/Blog/Blogbycategory.jsx"
import Searchresult from './components/Searchresult.jsx'
import Commentdetail from './components/Commentdetail.jsx'
import User from './components/user.jsx'
import Authrouteprotection from './components/Authrouteprotection.jsx'
import Authrouteprotectiononlyadmin from './components/Authrouteprotectiononlyadmin.jsx'
// import Editcategory from './components/Category/Editcategory.jsx'
const App=()=>{
  return (
    <Router>
        <Routes> 
          <Route element={<Mainlayout/>} >
          <Route path='/' element={<Homepage/>} />
          <Route path='/blog/:category/:slug' element={<Singlepostlist/>} />
          <Route path='/posts' element={<Postlist/>} />
          <Route path='/blog/:category' element={<Blogbycategory/>} />
          <Route path='/blog/search' element={<Searchresult/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/login' element={<Login/>} />

          <Route element={<Authrouteprotection/>}>
          <Route path='/profile' element={<Profile/>} />
          <Route path='/add-blog' element={<Addblog/>} />
          <Route path='/edit-blog/:blogid' element={<Editblog/>} />
          <Route path='/blog' element={<Blogdetail/>} />
          <Route path='/comments' element={<Commentdetail/>} />
          </Route>

          <Route element={<Authrouteprotectiononlyadmin/>}>
          <Route path='/users' element={<User/>} /> <Route path='/category' element={<Categorydetail/>} />
          <Route path='/add-category' element={<Addcategory/>} />
          </Route>

          </Route>

        </Routes>
    </Router>
  )
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
      <Provider store={store}>
          <ToastContainer />
          <App />
      </Provider>
    </PersistGate>
  </StrictMode>
);

