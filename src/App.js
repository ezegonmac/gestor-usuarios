import { useState } from "react"
import useFormulario from "./hooks/useFormulario.js"
import Input from "./components/Input.js"
import Card from "./components/Card.js"
import Container from "./components/Container.js"
import Button from "./components/Button.js"

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastname: "",
    email: "",
  })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario,
    ])
    reset()
  }

  return (
    <div style={{marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{padding: 20}}>
            <form onSubmit={submit}>
              <Input label="Nombre"
                    name="name"
                    value={formulario.name}
                    onChange={handleChange}
                    placeholder="Nombre"
              />

              <Input label="Apellido"
                    name="lastname"
                    value={formulario.lastname}
                    onChange={handleChange}
                    placeholder="Apellido"
              />

              <Input label="Correo"
                    name="email"
                    value={formulario.email}
                    onChange={handleChange}
                    placeholder="Correo"
              />

              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map(u => 
              <li key={u.email}>{`${u.name} ${u.lastname} ${u.email}`}</li>)}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App;