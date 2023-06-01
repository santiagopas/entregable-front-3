import './ErrMsg.css'
const ErrMsg = () => {
  return (
    <div className='errMsgContainer'>
      <p className='errMsg'>Por favor chequea que la información sea correcta</p>
      <button onClick={() => window.location.reload()}>Volver a intentar</button>
    </div>
  )
}

export default ErrMsg