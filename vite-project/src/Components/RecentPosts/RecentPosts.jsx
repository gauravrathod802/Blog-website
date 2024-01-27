import React from 'react'
import PostCard from './PostCard'
import { Container, Grid, GridItem, Heading } from '@chakra-ui/react'
import { blogData } from '../Data'
const RecentPosts = () => {
    return (
        <Container maxW={"1300px"}>
            <Heading fontSize={"2xl"} m={"8"}>Recent Posts</Heading>
            <Grid gridGap={"4"} gridTemplateColumns={"repeat(auto-fit, minmax(20rem, 1fr))"}>
                {blogData.map((post) => (
                    <GridItem key={post.title}display={"flex"} justifyContent={"center"}>
                    <PostCard post={post} />
                </GridItem>
                ))}
            </Grid>
        </Container>
    )
}

export default RecentPosts