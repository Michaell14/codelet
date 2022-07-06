import React from 'react'
import { Box, Text, Flex, Center, Button, Grid, Skeleton, Image, Badge } from '@chakra-ui/react';

function Examples() {
    return (
        <>
            <Center position={"relative"}>
                <Image src="/Running.png" borderRadius={10} w={"1100px"} h={"150px"} objectFit='cover' alt="runing"/>
                <Box pos={"absolute"}>
                    <Text color={"black.200"} fontWeight={700} fontSize={"xl"}>EXAMPLES</Text>
                    <Text fontSize={"3xl"} fontWeight={700}>See the potential for creativity in computer science.</Text>
                </Box>
                <Box pos={"absolute"} bottom={0} right={0}>
                    <Badge>Source: Yuanting/Iris Chen</Badge>
                </Box>
            </Center>
            

            
            <Box maxW={"1100px"} mx={"auto"} my={10}>
                <Text fontSize={"2xl"} fontWeight={600}>Meet p5.js</Text>
                <Text fontSize={"18px"}>p5.js is a JavaScript library that makes it easy to create graphic and interactive experiences. The functionality that p5.js brings allows you to create dynamic and engaging visuals and simulations for anything you can imagine.</Text>
            </Box>

            <Flex justify={"center"} gap={10} my={10}>
                <Box p={5} bg={"black.700"} maxW={"360px"} borderRadius={5}>
                    <Text fontWeight={700} fontSize={"lg"}>Visuals and animations</Text>
                    <Text mt={2}>Make cool visuals with shape and color functions and animate them with grouping and transformation functions.</Text>
                </Box>
                <Box p={5} bg={"black.700"} maxW={"360px"} borderRadius={5}>
                    <Text fontWeight={700} fontSize={"lg"}>Create interactive experiences</Text>
                    <Text mt={2}>Built-in functionality of keyboard, mouse, and touch input allows you to create interactive web experiences.</Text>
                </Box>
                <Box p={5} bg={"black.700"} maxW={"360px"} borderRadius={5}>
                    <Text fontWeight={700} fontSize={"lg"}>In JavaScript</Text>
                    <Text mt={2}>p5.js adds creative functionality to JavaScript, one of the most powerful and easy-to-learn programming languages in the industry.</Text>
                </Box>
            </Flex>

            <Grid templateColumns='repeat(5, 1fr)' justifyContent={"center"} mx={"20%"} my={20}>
                <Skeleton h={"130px"} w={"200px"} borderRadius={10}><Box h={"130px"} w={"200px"} bg={"black.700"} borderRadius={10} m={"auto"}></Box></Skeleton>
                <Skeleton h={"130px"} w={"200px"} borderRadius={10}><Box h={"130px"} w={"200px"} bg={"black.700"} borderRadius={10} m={"auto"}></Box></Skeleton>
                <Skeleton h={"130px"} w={"200px"} borderRadius={10}><Box h={"130px"} w={"200px"} bg={"black.700"} borderRadius={10} m={"auto"}></Box></Skeleton>
                <Skeleton h={"130px"} w={"200px"} borderRadius={10}><Box h={"130px"} w={"200px"} bg={"black.700"} borderRadius={10} m={"auto"}></Box></Skeleton>
                <Skeleton h={"130px"} w={"200px"} borderRadius={10}><Box h={"130px"} w={"200px"} bg={"black.700"} borderRadius={10} m={"auto"}></Box></Skeleton>
            </Grid>
        </>
    )
}

export default Examples