import React from 'react';
import Link from "next/link";
import Head from "next/head"
import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack,Center,
Button, Heading, Text, IconButton } from '@chakra-ui/react';
import { FcGoogle } from "react-icons/fc";
import { useRouter } from 'next/router';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../firebase"

// Initialize Google Provider
const provider = new GoogleAuthProvider();

function Login() {

    const router = useRouter();

    //Login using Google
    function GoogleLogin(){
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                router.push("/")
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // The AuthCredential type that was used.
                //const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorMessage);
                console.log(errorCode);
        });
    }

    //Login using Email and Password
    function emailPassLogin(){
        const email=$("#loginEmail");
        const password=$("#loginPassword");

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            router.push("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
    }


    return (
        <>
            <style jsx global>{`
                body{
                    background-color: #2b2b2b
                }
            `}</style>


            <Flex
                minH={'50vh'}
                align={'center'}
                justify={'center'}
                bg={'black.800'}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} color={"black.50"}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'black.50'}>
                    to learn the art of coding✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={'#7954a1'}
                    boxShadow={'2xl'}
                    p={8}>
                    <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                        <FormLabel color={"black.50"}>Email address</FormLabel>
                        <Input type="email" id="loginEmail"/>
                    </FormControl>
                    <FormControl id="password" isRequired>
                        <FormLabel color={"black.50"}>Password</FormLabel>
                        <Input type="password" id="loginPassword"/>
                    </FormControl>
                    <Stack spacing={7}>
                        <Stack
                        direction={{ base: 'column', sm: 'row' }}
                        align={'start'}
                        justify={'space-between'}>
                        <Checkbox color={"black.50"}>Remember me</Checkbox>
                        Forgot password?
                        </Stack>
                        
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}
                            onClick={emailPassLogin}>
                        Sign in
                        </Button>

                        <Center>
                            <Text>or using:</Text>
                        </Center>
                        <IconButton aria-label='Search database' icon={<FcGoogle />} onClick={GoogleLogin}/>
                        
                        <Stack pt={6}>
                            <Text align={'center'}>
                            A New User? <Link color={'blue.400'} href="/components/signup">Sign Up</Link>
                            </Text>
                        </Stack>
                    </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
        </>
    )
}


export default Login;
