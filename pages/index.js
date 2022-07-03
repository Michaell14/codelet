import Head from 'next/head'
import Image from 'next/image';
import Script from 'next/script';
import Link from "next/link"
import styles from '../styles/Home.module.css'
import { Box, Text, Flex, Center, Button, Icon, HStack, Grid } from '@chakra-ui/react';
import { BiSearchAlt } from "react-icons/bi";

export default function Home() {
  return (
    <Box position="relative" minH={"86vh"}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        
      </Head>

      <Center h={"300px"}>
        <Text fontSize={"4xl"} fontWeight={900}>Sharing the Art of Code💻</Text>
      </Center>
      
      <Center>
        <Box>
          <Flex>
            <Text color={"black.100"} fontWeight={700} mr={40} pt={2} fontSize={"xl"}>OUR MISSION</Text>
            <Box>
              <Text fontSize={"3xl"}>Title 1</Text>
              <Text maxW={"450px"}>Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah</Text>
            </Box>
            
          </Flex>
          <Flex pt={10}>
            <Text color={"black.100"} fontWeight={700} mr={40} pt={2} fontSize={"xl"}>WHAT WE DO</Text>
            <Box>
              <Text fontSize={"3xl"}>Title 2</Text>
              <Text maxW={"450px"}>Blah blah blah blah blah Blah blah blah blah blah Blah blah blah blah blah</Text>
            </Box>
          </Flex>
        </Box>
      </Center>

      <Box position={"absolute"} bottom={0}>
        <Text fontSize="xs" as="b" color="black.100">© 2022 codelet. All rights reserved.</Text>

        <Text fontSize={"xs"}>Codelet is available for free thanks to our sponsors.</Text>
      </Box>
    </Box>
  )
}
