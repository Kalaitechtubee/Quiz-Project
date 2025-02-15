import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Text, Input, Button, Box } from '@chakra-ui/react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        
        // Allow any username and password
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        navigate('/home');
    };

    return (
        <Box maxW="md" mx="auto" mt="10" p="6" borderWidth="1px" borderRadius="lg">
            <Text fontSize="2xl" mb="4">Login</Text>
            <form onSubmit={handleLogin}>
                <Input
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    mb="4"
                    isRequired
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    mb="4"
                    isRequired
                />
                <Button type="submit" colorScheme="blue" width="full">Login</Button>
            </form>
        </Box>
    );
};

export default Login;
