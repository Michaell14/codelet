import React, {useState, useEffect} from 'react';
import { Flex, Box, FormControl, FormLabel, Input,InputGroup, HStack, InputRightElement,
    Stack,
    Button,
    Heading,
    Text,useColorModeValue, useToast} from '@chakra-ui/react';
import $ from "jquery";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Link from "next/link";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../firebase";


function Signup() {

    const toast = useToast();
    const [showPassword, setShowPassword] = useState(false);

    //Signs a user in using Email and Password
    function emailPassSignUp(){
        const email = $("#signUpEmail").val();
        const password = $("#signUpPassword").val();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
    
            //Display sign up successful window
            toast({
                title: 'Account created.',
                description: "Your account has been successfully created!",
                status: 'success',
                duration: 5000,
                isClosable: true,
                position: "top"
              })
    
            //Sends them a verification email
            sendEmailVerification(user)
            .then(() => {
              // ...
               //Display sign up successful window
                toast({
                    title: 'Email Verification.',
                    description: "Please check your inbox to verify your email.",
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                    position: "top"
                })
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode);
              console.log(errorMessage);
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage);
        });
    }

    return (
        <>

            
            <Flex
                minH={'80vh'}
                align={'center'}
                justify={'center'}
                >
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'} color={"black.50"}>
                    Sign up
                    </Heading>
                    <Text fontSize={'lg'} color={"black.50"}>
                    to enjoy all of our cool features ✌️
                    </Text>
                </Stack>
                <Box
                
                    rounded={'lg'}
                    bg={useColorModeValue('#7954a1', 'gray.700')}
                    boxShadow={'2xl'}
                    p={8}>
                    <Stack spacing={4}>
                    <HStack>
                    </HStack>
                    <FormControl isRequired>
                        <FormLabel color="black.50">Email address</FormLabel>
                        <Input type="email" id={"signUpEmail"} color={"black.100"}/>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel color={"black.50"}>Password</FormLabel>
                        <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'} color={"black.100"} id={"signUpPassword"}/>
                        <InputRightElement h={'full'}>
                            <Button
                            variant={'ghost'}
                            onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                            }>
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                        <Button
                        loadingText="Submitting"
                        size="lg"
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={emailPassSignUp}>
                        Sign up
                        </Button>
                    </Stack>
                    <Stack pt={6}>
                        <Text align={'center'}>
                        Already a user? <Link color={'blue.400'} href="/components/login">Login</Link>
                        </Text>
                    </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
        </>
    )
}

export default Signup;