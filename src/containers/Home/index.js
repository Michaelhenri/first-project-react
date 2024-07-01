import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'

//Components
import H1 from '../../components/Title'
import ContainerItens from '../../components/containerItens'
import Button from '../../components/Button'

import {
  Container,
  Image,
  InputLabel,
  Input,
  ButtonUsers
} from './styles'

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()
  const navigate = useNavigate()

  // Add usuarios
  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser])

    navigate('/usuarios')

  }

  function goFowardPage(){
    navigate("/usuarios")
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

        <Button onClick={addNewUser}>
          Cadastrar <img alt='img-seta' src={Arrow} />
        </Button>

        <ButtonUsers onClick={goFowardPage}>
          Usuarios <img alt='img-seta' src={Arrow} />
        </ButtonUsers>

      </ContainerItens>
    </Container>
  )
}

export default App