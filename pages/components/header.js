import React from 'react';
import Link from "next/link"
import { Box, Text, Flex, Button, Image, HStack } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react'

function Header() {
    return (
        <>
            <style jsx global>{`
                body{
                    background-color: #2b2b2b
                }
            `}</style>
        
            <Flex justify={"space-between"} mt={10} mx={20} position={"sticky"} top={10}>
                <Flex>
                    <Link href='/'>
                        <Flex _hover={{cursor: "pointer"}}>
                            <Image src="/logo_light_transparent.png" boxSize={"50px"}/>
                            <Text fontSize={"30px"} color={"purple.100"} fontWeight={700} ml={-2} mt={1}>odelet</Text>
                        </Flex>
                    </Link>
                    <HStack bottom={0}>
                        <Link href="/components/projects"><Text ml={5} _hover={{cursor: "pointer"}}>Projects</Text></Link>
                        <Link href="/components/examples"><Text ml={5} _hover={{cursor: "pointer"}}>Examples</Text></Link>
                        <Link href="/components/team"><Text ml={5} _hover={{cursor: "pointer"}}>Team</Text></Link>
                    </HStack>
                </Flex>
                <Box>
                    <Link href='/components/login'><Button _hover={{color:"#D3D3D3"}} bg={"linear-gradient(315deg, #6c34b2 0%, #d058c6 100%)"} mr={5} h={"34px"} color={"#f5f5f5"}>Log In</Button></Link>
                    <Link href="/components/signup"><Button colorScheme={"gray"} h={"34px"}>Sign Up</Button></Link>
                </Box>
            </Flex>
        </>
    )
}
export default Header;
