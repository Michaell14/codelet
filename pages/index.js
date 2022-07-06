import Head from 'next/head'
import Script from 'next/script';
import Link from "next/link"
import styles from '../styles/Home.module.css'
import { Box, Text, Flex, Center, Button, Icon, HStack, Grid, Image } from '@chakra-ui/react';
import { BiSearchAlt } from "react-icons/bi";

export default function Home() {
  return (
    <Box position="relative" minH={"86vh"}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        
      </Head>

      <Center h={"300px"}>
        <Box w={"50vw"}>
          <Flex flexDir={"column"} align={"center"}>
            <Text fontSize={"4xl"} fontWeight={900}>Sharing the Art of Code💻</Text>
            <Box position={"relative"} w={"70%"} p={5} pb={"60px"} borderRadius={5} bg={"rgba(54, 69, 79, .4)"}>
              <Text fontWeight={700} fontSize={"1.1em"}>Hey there,</Text>
              <Text mt={3}>I'm creating Codelet along with a few friends to show the world how much creativity is involved in CS and how it's not just about numbers and algorithms, but so much more.</Text>
              <Text mt={3}>We're working on a few initiatives that we're aiming to launch this fall, and I'm hoping to get your support. Here are a few ways to get involved. Thanks for joining us on this journey!</Text>
              <Text right={6} bottom={5} position={"absolute"}>~ Linkai Wu, Founder &amp; Project Lead</Text>
            </Box>
          </Flex>
          
        </Box>
        
      </Center>
      
      <Center mt={40}>
        <Flex flexDir={"column"} align={"center"}>
          <Flex>
            <Text color={"black.100"} fontWeight={700} mr={40} pt={2} fontSize={"xl"}>OUR MISSION</Text>
            <Box maxW={"650px"}>
              <Text fontSize={"3xl"} fontWeight={700}>We support creative expression in computer science.</Text>
              <Text>New coders often get believe the stigma that programming is difficult and only mathematically oriented. In fact, computer science has so much potential for creativity, but many traditional educational structures only present a narrow-minded view of the industry.</Text>
              <Text>The truth is, the world is not black and white, 1s and 0s, true and false — so CS education shouldn't be either. We're creating Codelet to raise exposure and provide resources and tools to support the creative expression that the field is lacking.</Text>
              <Text><a href="https://medium.com/dare-to-be-better/want-to-try-creative-coding-start-here-35bb88c5fb04" target={"_blank"} rel="noreferrer">Learn more on creative coding</a></Text>
            </Box>
            
          </Flex>
          
          <Box position={"relative"} my={20}>
            <Image src="back1.png" objectFit='cover' w={"60vw"} h={"300px"} bgRepeat={"repeat-x"}/>
            <Box p={4} transform={"translateX(-50%) translateY(50%)"} position={"absolute"} borderRadius={5} bottom={"50%"} left={"50%"} bg={"rgba(170, 51, 106, .8)"}>
              <Text>See examples of creative coding</Text>
            </Box>
          </Box>
          

          <Flex pt={10}>
            <Text color={"black.100"} fontWeight={700} mr={40} pt={2} fontSize={"xl"}>WHAT WE DO</Text>
            <Box  maxW={"650px"}>
              <Text fontSize={"3xl"}>We're bringing change to the CS education space.</Text>
              <Text maxW={"450px"}>We're teaming up with organizations and educators to share free tools and resources for creative coding.</Text>
            </Box>
          </Flex>

          <Grid templateColumns='repeat(2, 1fr)' gap={6} w={"50%"} mt={20}>
            <Box bg={"black.700"} borderRadius={5} p={5}>
                <Text>1.</Text>
                <Text>Self-guided workshops</Text>
                <Text>An online directory of interactive lessons and videos to teach individuals how to code with creative libraries.</Text>
            </Box>
            <Box bg={"black.700"} borderRadius={5} p={5}>
              <Text>2.</Text>
              <Text>Resources for educators</Text>
              <Text>Lesson plans and workshop instructions for the classroom with a creative approach to coding.</Text>
            </Box>
            <Box bg={"black.700"} borderRadius={5} p={5}>
              <Text>3.</Text>
              <Text>A platform to create</Text>
              <Text>An online coding IDE with support for creative coding that can be used in conjunction with lessons and workshops.</Text>
            </Box>
            <Box bg={"black.700"} borderRadius={5} p={5}>
              <Text>4.</Text>
              <Text>An inclusive community</Text>
              <Text>We support people of all races, genders, and backgrounds, because everyone deserves an opportunity in the tech industry.</Text>
            </Box> 
          </Grid>
          
          <Flex my={40}>
            <Text color={"black.100"} fontWeight={700} mr={40} pt={2} fontSize={"xl"}>GET INVOLVED</Text>
            <Box maxW={"650px"}>
              <Text fontSize={"3xl"} fontWeight={700}>Join us in our mission to make creative coding more accessible.</Text>
              <Text>Get the latest updates on our initiatives, opportunities, and tech-related news!</Text>
              <Button colorScheme={"green"} isDisabled>Join our newsletter</Button>
              <Text>We're looking to partner with organizations and educators to launch our initiatives with.</Text>
              <Text>Contact us ➤ codeletproject@gmail.com</Text>
              <Text>Interested in joining our team?</Text>
              <Text>Applications are open to all high school students and beyond and are accepted on a rolling basis.</Text>
              <Button>Apply for a position</Button>
            </Box>
            
          </Flex>
          
        </Flex>
      </Center>

      <Box position={"absolute"} bottom={5} right={5} textAlign={'right'}>
        <Text fontSize="xs" as="b" color="black.100">© 2022 codelet. All rights reserved.</Text>

        <Text fontSize={"xs"}>Codelet is available for free thanks to our sponsors.</Text>
      </Box>
    </Box>
  )
}
