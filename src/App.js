
import useFormulario from './hooks/useFormulario'
import Input from './component/Input'
import './component/Input.css'
import Card from './component/Card'
import Container from './component/Container'
import Button from './component/Button'
import { useState } from 'react'

function App (){
  const [usuarios, setUsuarios] = useState([])
  const [formulario, HandleChange, reset] = useFormulario({
          name: '',
          lastname: '',
          correo: ''})
  const submit = e =>{
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario
    ])
    reset()
  }
 
  return (
    <Container >
<Card>
    <form onSubmit={submit} style={{padding: 20}}>
     <Input label="Nombre" 
     name="name" 
     value={formulario.name} 
     onChange={HandleChange}/>
      <Input label="Apellido" 
     name="lastname" 
     value={formulario.lastname} 
     onChange={HandleChange}/>
      <Input label="Correo" 
     name="correo" 
     type="email"
     value={formulario.correo} 
     onChange={HandleChange}/>
     <Button type="submit" >Enviar</Button>
    </form>
    </Card>
    <Card>
      <ul>
        {usuarios.map(x =>
        <li key={x.correo}>{`{${x.name} ${x.lastname}: ${x.correo}}`}</li>  )}
      </ul>
    </Card>
    </Container>
    
  )
}
export default App;
