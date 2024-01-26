import React from 'react';
import { Container, Flex, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import BTC from './../assets/btc.svg';
const Navbar = () => {
    return (
        <>
            <Container
            as="nav" 
            maxW="1600px" 
            display="flex" 
            padding="4" justifyContent="space-between"
            boxShadow="lg"
            pos="sticky"
            top="0"
            zIndex="50"
            bg="white"
            >
                <Flex align="center">
                    <img src={BTC} width={50} height={50} style={{ marginRight: "15px" }} />
                    <Text mr="2">Home</Text>
                </Flex>
                <Flex align="center">
                    <Text mr="2">Posts</Text><Text mr="2">Trending</Text>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <SearchIcon color='gray.300' />
                        </InputLeftElement>
                        <Input w={{base: "100px", sm: "160px", md:"auto"}}type='tel' placeholder='Phone number' />
                    </InputGroup>
                </Flex>
            </Container>
        </>
    );
};

export default Navbar;