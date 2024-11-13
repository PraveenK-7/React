import React from 'react';
import {
  Box,
  Flex,
  Avatar,
  Text,
  VStack,
  HStack,
  IconButton,
  Divider,
  Badge,
  Heading,
  Stack,
  Progress,
  Button,
} from '@chakra-ui/react';
import { FaShoppingCart, FaBus, FaHome, FaUtensils, FaFilm } from 'react-icons/fa';

const Sidebar = () => (
  <Box bg="#1E2772" color="white" w="20%" minH="100vh" p={4}>
    <VStack align="start" spacing={8}>
      <Box position="relative">
        <Avatar size="lg" name="Praveen K" src="https://bit.ly/broken-link" mb={2} />
        <Text fontWeight="bold">Praveen K</Text>
        <Text fontSize="sm">kpraveenkumarsamy@email.com</Text>
      </Box>
      <VStack align="start" spacing={4}>
        {['My Profile', 'Leave', 'Holiday', 'Timesheet Entry', 'Settings'].map((item, index) => (
          <Text key={index} fontSize="lg" fontWeight={item === 'My Profile' ? 'bold' : 'normal'} color={item === 'My Profile' ? 'gray.200' : 'gray.500'}>
            {item}
          </Text>
        ))}
      </VStack>
    </VStack>
  </Box>
);

const Profile = () => (
  <Flex 
    align="center" 
    justify="center" 
    flex="1" 
    bg="gray.100" 
    py={8} // Adding top/bottom padding
    px={4} // Padding for responsiveness
  >
    <Box
      w={{ base: "100%", sm: "400px" }} // Responsive width for mobile and desktop
      bg="white"
      p={8}
      borderRadius="lg"
      boxShadow="xl"
    >
      <Heading fontSize="2xl" textAlign="center" color="teal.600" mb={6}>
        My Profile
      </Heading>

      <Text fontSize="lg" fontWeight="bold" color="teal.500" mb={4}>
        Overview
      </Text>
      <Stack spacing={3} mb={6}>
        {[
          { label: 'Employee ID', value: '123' },
          { label: 'Role', value: 'Developer' },
          { label: 'Joining Date', value: '12/04/2023' },
          { label: 'Reporting Manager', value: 'Saranya Sakthivelu' },
          { label: 'Work Location', value: 'Dindigul' },
        ].map((item, index) => (
          <Flex justify="space-between" key={index}>
            <Text fontSize="sm" color="gray.600">{item.label}</Text>
            <Text fontSize="sm" fontWeight="bold" color="gray.700">{item.value}</Text>
          </Flex>
        ))}
      </Stack>
      <Divider />

      <Text fontSize="lg" fontWeight="bold" color="teal.500" mt={6} mb={4}>
        Qualification
      </Text>
      <Text fontSize="sm" fontWeight="bold" color="gray.700" mb={6}>
        Bachelor of Engineering - Computer Science
      </Text>
      <Divider />

      <Text fontSize="lg" fontWeight="bold" color="teal.500" mt={6} mb={4}>
        Work Experience
      </Text>
      <Text fontSize="sm" color="gray.700">
        2 years of experience in software development.
      </Text>
    </Box>
  </Flex>
);

const Dashboard = () => (
  <Flex h="100vh">
    <Sidebar />
    <Profile />
  </Flex>
);

export default Dashboard;
