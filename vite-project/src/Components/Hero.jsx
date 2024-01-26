import { Image } from '@chakra-ui/image';
import { Box, Button, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import BTC1 from './../assets/btc.svg';


const Hero = () => {
    return (
<Container
    maxW="1440px"
    display="flex" 
    h="100vh" 
    alignItems="center"
    flexDirection={{base:"column-reverse", md:"row"}}
    
    >
<Stack height="350px" justify="space-around
" mt={{base:"8", md:"0"}}>
    <Heading as="h1" fontSize={{base:"2xl", sm:"3xl",md:"6xl"}}>Get Crypto Related Knowledge</Heading>
    <Text as="p" fontSize={{base:"sm", sm:"md",md:"lg"}} maxW={{base:"100%", md:"80%"}}>Welcome to a digital space where the world of cryptocurrencies unfolds and comes to life. Explore the fascinating world of cryptocurrencies with 'Get Crypto Related Knowledge.' Dive into insightful articles covering digital currencies, blockchain tech, and the latest trends. Whether you're a seasoned investor or a curious enthusiast, find valuable information to stay informed in the dynamic realm of crypto.
    </Text>
    <Box>
        <Button colorScheme='orange'>Check Posts</Button>
    </Box>
</Stack>
<Flex justifyContent="center"  mt={{base:"8", md:"0"}}> 
    <Image mr="40" src={BTC1} h={{base:"300", sm:"300", md:"800"}}/>
</Flex>
</Container> 

);
}

export default Hero