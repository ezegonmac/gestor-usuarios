
import Button from "./Button.js"
import Input from "./Input.js"
import useFormulario from "../hooks/useFormulario.js"

const UserForm = ({ submit }) => {

    const [formulario, handleChange, reset] = useFormulario({
        name: "",
        lastname: "",
        email: "",
      })

    const handleSubmit = (e) => {
        e.preventDefault()
        submit(formulario)
        reset()
    }

    return(
        <form onSubmit={handleSubmit}>
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
    )
}