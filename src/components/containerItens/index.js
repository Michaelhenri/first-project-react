import React from 'react'

import {ContainerItens as Container} from './styles'

function ContainerItens({children, containerUsers}){

    return <Container containerUsers={containerUsers}>{children}</Container>
}

export default ContainerItens