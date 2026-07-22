import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import ListDetail from './Pages/ListDetail'

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/todos/:id" element={<ListDetail/>}> </Route>

      </Routes>
    </>
  )
}

export default App
