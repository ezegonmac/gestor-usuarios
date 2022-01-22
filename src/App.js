import { useState } from "react"
import Card from "./components/Card.js"
import Container from "./components/Container.js"
import UserForm from "./components/UserForm.js"

function App() {
  const [usuarios, setUsuarios] = useState([])

  const submit = usuario => {
    setUsuarios([
      ...usuarios,
      usuario,
    ])
  }

  return (
    <div style={{marginTop: '15%'}}>
      <Container>
        <Card>
          <div style={{padding: 20}}>
            <UserForm submit={submit}/>
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