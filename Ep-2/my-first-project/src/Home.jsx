import React from 'react';
import images from './assets/images/images';
import { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [fromInput, setFromInput] = useState({
    mail: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFromInput((currInput) => ({
      ...currInput,
      [name]: value,
    }));
  };
  console.log(fromInput);
  
   
  const handleLogin = () => {
    // Validate credentials
    if (fromInput.mail === "kpraveenkumarsamy@gmail.com" && fromInput.password === "Kp@123") {
      navigate('/dashboard'); // Navigate to the Dashboard if credentials match
    } else {
      alert("Invalid employee ID or password.");
    }
  };

  return (
    <Flex h="100vh" justify="center" align="center" bg="gray.100">
      {/* Background Styling */}
      <Box
        margin="0"
        position="absolute"
        left="80%"
        top="0"
        width="20%"
        height="100%"
        background="#1E2772"
      />
      {/* updown Image */}
      <Image
        src={images.updown}
        position="absolute"
        top="0"
        height="18%"
        width="15px"
      />
      {/* dot Image */}
      <Image
        src={images.dot}
        width="10%"
        height="20%"
        position="absolute"
        left="32%"
        bottom="8%"
      />
      {/* welcome text */}
      <Box
        position="absolute"
        height="60%"
        left="10%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Text fontSize="5xl" fontFamily="Poppins" color="#000000">
          Welcome Back
        </Text>
      </Box>
      {/* Outer Container */}
      <Box
        position="absolute"
        left="40%"
        display="flex"
        w="50%"
        maxW="1000px"
        h="auto"
        borderRadius="3xl"
        overflow="hidden"
        boxShadow="md"
        border="6px solid #0A2540"
        borderColor="#1E2772"
      >
        {/* Right Section (Form + Illustration) */}
        <Flex w="100%" bg="white" alignItems="center" justifyContent="center">
          {/* Form Section */}
          <Box
            w="60%"
            p={10}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* Company Logo */}
            <Image
              src={images.logo}
              alt="Company Logo"
              mb={6}
              width="200px"
            />

            <Text fontSize="lg" color="gray.600" mb={6} textAlign="center">
              Login into your account
            </Text>

            <Stack spacing={4} w="100%">
              {/* Employee ID Field */}
              <FormControl id="employee-id">
                <FormLabel>Employee ID</FormLabel>
                <InputGroup>
                  <Input
                    name="mail"
                    type="text"
                    placeholder="BWA001"
                    bg="gray.100"
                    border="none"
                    focusBorderColor="blue.500"
                    value={fromInput.mail}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <EmailIcon color="gray.400" />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {/* Password Field */}
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    bg="gray.100"
                    border="none"
                    focusBorderColor="blue.500"
                    value={fromInput.password}
                    onChange={handleChange}
                  />
                  <InputRightElement>
                    <LockIcon color="gray.400" />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {/* Forgot Password */}
              <Link color="blue.500" textAlign="right" mb={4}>
                Forgot password?
              </Link>

              {/* Login Button */}
              <Button
                bg="#0A2540"
                color="white"
                w="full"
                _hover={{ bg: '#082A49' }}
                onClick={handleLogin}
              >
                Login now
              </Button>
            </Stack>
          </Box>

          {/* Illustration Section */}
          <Box
            height="100%"
            w="100%"
            bg="gray.50"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p={4}
          >
            <Image
              src={images.Welcome}
              alt="Illustration"
              w="80%"
              h="auto"
            />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Home;