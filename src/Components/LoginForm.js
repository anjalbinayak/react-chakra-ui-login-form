import React from 'react'
import { Flex, Heading,Input, Button,   useColorMode, useColorModeValue } from '@chakra-ui/react'
const LoginForm = () => {

    const {toggleColorMode} = useColorMode();
    
    const bgColor = useColorModeValue("gray.100","gray.700");

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
                <Flex direction="column" background={bgColor} p={12} rounded={6}>
                    <Heading mb={6}>Log In</Heading>
                    <Input placeholder="anjalbinayak@gmail.com" variant="filled" mb={3} type="email" />
                    <Input placeholder="*********" variant="filled" mb={6} type="password"/>

                    <Button colorScheme="teal" mb={3}>Log In</Button>

                    <Button onClick={toggleColorMode}>Toggle Theme</Button>
                </Flex>
        </Flex>
    )
}

export default LoginForm
