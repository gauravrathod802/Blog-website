import { Image } from '@chakra-ui/image';
import { Container, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import BTC1 from './../assets/btc.svg';


const Hero = () => {
    return (
<Container maxW="1300px" display="flex">
<Stack>
    <Heading as="h1">Get Crypto Related Knowledge</Heading>
    <Text as="p">
        Welcome to a digital space where the world of cryptocurrencies unfolds and comes to life. 'Get Crypto Related Knowledge' is not just a heading; it's an invitation to delve into the dynamic realm of digital currencies, blockchain technology, and the latest trends in the crypto space. Here, we embark on a journey to demystify the complexities of cryptocurrencies, providing insightful knowledge, market trends, and expert analysis. Whether you're a seasoned investor, a curious enthusiast, or a newcomer eager to explore, this blog is your go-to source for comprehensive and up-to-date information. Stay tuned for deep dives into blockchain innovations, market analyses, and informative guides designed to empower you with the knowledge you need to navigate the exciting world of crypto.
        </Text>
</Stack>
<Flex>
    <Image mr="4" src={BTC1} />
</Flex>
</Container> 

);
}

export default Hero