import React from 'react'

import People from './assets/people.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button, User } from './styles'

const App = () => {
  const users = [
    { id: Math.random(), name: 'Michael', age: 28 },
    { id: Math.random(), name: 'Larissa', age: 30 }
  ];

  return (
    <Container>
      <Image alt='logo-image' src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder='Nome' />

        <InputLabel>Idade</InputLabel>
        <Input placeholder='Idade' />

        <Button>
          Cadastrar <img alt='img-seta' src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button><img src={Trash} alt='lata-de-lixo'/></button>
            </User>
          ))}
        </ul>

      </ContainerItens>
    </Container>
  )
}

export default App