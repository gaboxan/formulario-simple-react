import { useState } from "react"

const useFormulario = (inicial) => {
  const [formulario, setFormulario] = useState(inicial)

  const HandleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const reset = () => {
    setFormulario(inicial)
  }

  return [formulario, HandleChange, reset]
}

export default useFormulario