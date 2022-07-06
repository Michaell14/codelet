import React, {useState} from 'react'
import { Box, Text, Flex, Center, Button, Stack, Skeleton, Image, Grid  } from '@chakra-ui/react';

function Team() {
    const [isLoaded, setIsLoaded] = useState(false)

    return (  
        <>
            <Grid templateColumns='repeat(3, auto)' gap={10} justifyContent={'center'} >
                <Skeleton
                    isLoaded={isLoaded}
                    bg='green.500'
                    color='white'
                    fadeDuration={1}
                    boxSize={"250px"}>
                    <Box w={"250px"}>
                        <Image/>
                        <Text>Person 1</Text>
                    </Box>
                </Skeleton>
                <Skeleton
                    isLoaded={isLoaded}
                    bg='green.500'
                    color='white'
                    fadeDuration={1}
                    boxSize={"250px"}>
                    <Box w={"250px"}>
                        <Image/>
                        <Text>Person 1</Text>
                    </Box>
                </Skeleton>
                <Skeleton
                    isLoaded={isLoaded}
                    bg='green.500'
                    color='white'
                    fadeDuration={1}
                    boxSize={"250px"}>
                    <Box w={"250px"}>
                        <Image/>
                        <Text>Person 1</Text>
                    </Box>
                </Skeleton>
                <Skeleton
                    isLoaded={isLoaded}
                    bg='green.500'
                    color='white'
                    fadeDuration={1}
                    boxSize={"250px"}>
                    <Box w={"250px"}>
                        <Image/>
                        <Text>Person 1</Text>
                    </Box>
                </Skeleton>
            </Grid>
            

            <Box textAlign='center'>
                <Button onClick={() => setIsLoaded((v) => !v)}>toggle</Button>
            </Box>
        </>
    )
}


export default Team;