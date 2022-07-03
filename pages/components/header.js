import React from 'react';
import Link from "next/link"
import { Box, Text, Flex, Button, Image } from '@chakra-ui/react';
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
                    <Menu isLazy>
                        <MenuButton color={'purple.100'}>Projects</MenuButton>
                        <MenuList>
                            {/* MenuItems are not rendered unless Menu is open */}
                            <MenuItem>Art</MenuItem>
                            <MenuItem>Math</MenuItem>
                            <MenuItem>Design</MenuItem>
                        </MenuList>
                    </Menu>
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
