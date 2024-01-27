import { Avatar, Button, Stack, Tag} from "@chakra-ui/react"
import {Heading, Flex, Text} from "@chakra-ui/layout"
import { Image } from "@chakra-ui/image"
import { PiShareFatFill } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";


const PostCard = ({post}) => {
    return (
        <Stack w="20rem" boxShadow="lg" borderRadius="lg" overflow={"hidden"}>
            <Image src={post.imageUrl} h="40"/>
            <Stack p="4">
                <Heading mb="4" fontSize={"xl"}>{post.title}</Heading>
                <Flex mb="4" align={"center"}>
                    <Avatar size={"sm"} mr="2"src={post.avatar}/>
                    <Text fontSize={"md"} fontWeight="bold" mr="2">{post.authorName}</Text>
                    <Text>{post.publishDate}</Text>
                </Flex>
                <Text mb="4">
                    {post.description}
                </Text>
                <Flex>
                    {post.tags.map((tag)=>(
                    <Tag key={tag}>{tag}</Tag>
                    ))}
                </Flex>
                <Flex justifyContent="flex-start" gap="7" fontSize={"27"} mt="8" cursor={"pointer"}>
                    <FaRegHeart />
                    <FaComment />
                    <PiShareFatFill />
                    <BsThreeDotsVertical />

                </Flex>
            </Stack>
        </Stack>
    )
}

export default PostCard