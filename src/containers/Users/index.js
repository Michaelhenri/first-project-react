import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

//Components
import H1 from '../../components/Title'
import ContainerItens from '../../components/containerItens'
import Button from '../../components/Button'

import {
  Container,
  Image,
  User
} from './styles'

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate()


  //Guarda usuários 
  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");

      setUsers(newUsers);
    }

    fetchUsers()
  }, [])

  //Deleta usuários 
  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)

    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers)
  }

  function goBackPage() {
    navigate("/")
  }

  return (
    <Container>
      <Image alt='logo-image' src={Avatar} />
      <ContainerItens containerUsers={true}>
        <H1>Usuários</H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt='lata-de-lixo' />
              </button>
            </User>
          ))}
        </ul>

        <Button isBack={true} onClick={goBackPage}>
          <img alt='img-seta' src={Arrow} /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  )
}

export default Users;