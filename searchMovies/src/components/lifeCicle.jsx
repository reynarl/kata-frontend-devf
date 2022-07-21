import React from 'react'

const lifeCicle = () => {
  // Los cambios de estado siempre se hacen  dentro de un evento o un useEffect
  // const [texto, setTexto] = useState('')

  // 1. Se ejecuta siempre que se monta el componente o hay un cambio de estado
  // useEffect(() => {
  //   // Los estados no se actualizan en la primera carga, sino hasta la segunda vez
  //   console.log('en el yusefect')
  //   setTexto('CAMBIANDO ESTADO desde useEfect')
  // })

  // 2. se ejecuta la primera vez que se carga el componente, al agregar []
  // useEffect(() => {
  //   console.log(' desde el yusefect que se carga solo la primera vez')
  // }, [])

  // 3. Se ejecuta cuando hay un cambio en alguna dependencia (variables o estados)

  // useEffect(() => {
  //   console.log('se carga la primera vez auqnue no cambie el estado jeje')
  //   if (texto !== '') console.log('cambio de estado')
  // }, [texto])

  const handleSubmit = (e) => {
    e.preventDefault() // Evitamos que el navegador se recarge
    // console.log(e.target.buscador.value) // otra opcion es con target y acceder al objeto con name='buscador' y luego al valor
    // setTexto('CAMBIANDO ESTADO desde el boton buscar')
  }

  // console.log(texto)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input
            type='search'
            className='form-control'
          />
          <button className='btn btn-primary'>Buscar</button>
        </div>
      </form>
    </div>
  )
}

export default lifeCicle
