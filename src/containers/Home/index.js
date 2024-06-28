import React, { useState, useRef } from 'react'

import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

import {
  Container,
  Image,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Button,
  ButtonUsers
} from './styles'

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()

  // Add usuarios
  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser])

  }

  return (
    <Container>
      <Image alt='logo-image' src={People} />
      <ContainerItens>
        <H1>DevUsers</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder='Idade' />

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt='img-seta' src={Arrow} />
        </Button>

        <ButtonUsers to="/usuarios">
          Usuarios <img alt='img-seta' src={Arrow} />
        </ButtonUsers>

      </ContainerItens>
    </Container>
  )
}

export default App