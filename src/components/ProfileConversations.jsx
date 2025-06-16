import {
  Box,
  Grid,
  GridItem,
  Flex,
  Text,
  Spacer,
  Image,
  Input,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { profileConversations } from "../../data";

export function ProfileConversations() {
  return (
    <Box as="div">
      <Grid templateColumns={{ base: "1fr",md: "1fr 1fr", xl: "repeat(2, 1fr)" }} gap={10}>
        {profileConversations.map((conversation) => {
          return (
            <GridItem
            key={conversation.id}
              bg={conversation.read ? "white" : "#f6f9fc"}
              borderLeft={
                conversation.read ? "4px solid transparent" : "4px solid"
              }
              borderColor={conversation.read ? "blue.500" : "transparent"}
              p="4"
              cursor="pointer"
              rounded="md"
              boxShadow="lg"
              _hover={{ bg: conversation.read ? "gray.50" : "blue.100" }}
            >
              <Flex
                bg={conversation.read ? "blue.500" : "black"}
                p="4"
                color="white"
                fontWeight="bold"
                alignItems="center"
                roundedTop="lg"
              >
                <Flex flexDir="column">
                  <Text fontSize={{ base: "8px", md: "14px" }}>📥 Sender</Text>
                  <Text fontSize={{ base: "8px", md: "14px" }}>
                    {conversation.subject}
                  </Text>
                </Flex>

                <Spacer />
                <Flex alignItems="center" gap={2}>
                  <Flex flexDir="column">
                    <Text fontSize={{ base: "8px", md: "14px" }}>
                      {conversation.sender}
                    </Text>
                    <Text fontSize={{ base: "8px", md: "14px" }}>
                      {conversation.date}
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Box as="div" h="300px" p="5">
                <Flex gap={4} alignItems="center">
                  <Image
                    borderRadius="full"
                    boxSize="30px"
                    src={conversation.avatar}
                    alt="Dan Abramov"
                  />
                  <Text
                    fontSize={{ base: "12px", lg: "18px" }}
                    textAlign="start"
                  >
                    {conversation.message}
                  </Text>
                </Flex>
              </Box>
              <Box>
                <Flex alignItems="center" gap={2}>
                  <Image
                    borderRadius="full"
                    boxSize="30px"
                    src="https://bit.ly/dan-abramov"
                    alt="Dan Abramov"
                  />
                  <Input placeholder="Reply" />
                  <Icon color="blue" fontSize="18px" as={FaLocationArrow} />
                </Flex>
              </Box>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
