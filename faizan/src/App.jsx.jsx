import { useState } from 'react'

import './App.css'
import AddMovie from './components/addmovie'
import {Routes , Route ,Link } from 'react-router-dom'
import MoviesList from './components/MoviesList'
import EditMovies from './components/EditMovies'
import Notadmin from './components/notadmin'
import PrivateRoute from './components/PrivateRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/*last linking step*************************************** */}
    <Link to={'/home'} >Movies List</Link>
    <Link to={'/add'}>Add movie</Link>
{/*last linking step******************************************* */}


      <Routes>
      <Route path='/home' element={ <MoviesList />} /> {/*normal route process */}
        <Route path='/add' element={ <AddMovie />} />



{/*private route wrapper******************************************************************* */}
        <Route path='/edit/:id' element={ <PrivateRoute> <EditMovies /> </PrivateRoute> } />
{/*private route wrapper******************************************************************* */}

        <Route path='/not' element={ <Notadmin />} />
      </Routes>
    </>
  )
}

export default App
