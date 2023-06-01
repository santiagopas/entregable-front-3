import { useState } from 'react'
import './App.css'
import Card from './components/card/Card'
import ErrMsg from './components/ErrMsg/ErrMsg'
import Form from './components/Form/Form'

function App() {
  const [user, setUser] = useState({
    name: '',
    apellido: '',
    materia: ''
  })
  const [show, setShow] = useState()
  const handleSubmit = (e) => {
    e.preventDefault()
    user.name.length && user.name[0] !== ' ' && user.apellido.length && user.apellido[0] !== ' ' && user.name.length && user.apellido.length >= 3 && user.materia.length >= 6 ? setShow(true) : setShow(false)
  }

  return (
    <div className='AppContainer'>
      {show === undefined ? <Form user={user} setUser={setUser} handleSubmit={handleSubmit} /> : null}
      {show === true ? (<Card user={user} />) : null}
      {show === false ? (<ErrMsg />) : null}
    </div >
  )
}

export default App
