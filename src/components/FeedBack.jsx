import React from "react";
import { Box } from "@chakra-ui/react";
import {
  Grid,
  GridItem,
  Flex,
  Text,
  Spacer,
  Icon,
  Progress,
  Button,
  Image,
  Stack,
  Card,
  CardHeader,
  CardBody,
  Heading,
  StackDivider,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { SlPeople } from "react-icons/sl";
import { BsThreeDots } from "react-icons/bs";
import { IoMdJet } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { FaRegThumbsUp } from "react-icons/fa";
import { clientFeedbacks } from "../../data";

export default function FeedBack() {
  // Split feedbacks into two
  const firstHalf = clientFeedbacks.slice(
    0,
    Math.ceil(clientFeedbacks.length / 2)
  );
  const secondHalf = clientFeedbacks.slice(
    Math.ceil(clientFeedbacks.length / 2)
  );
  return (
    <Box as="section">
      <Grid templateColumns="1fr" gap={6}>
        <GridItem w="100%">
          <Grid templateColumns={{ base: "1fr", xl: "1fr 1fr" }} gap={5}>
            <GridItem>
              <Grid
                templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
                gap={4}
              >
                <GridItem w="100%" bg="#292f50" color="white" rounded="lg">
                  <Flex
                    justifyContent="space-between"
                    flexDir="column"
                    gap={12}
                    as="div"
                    p="10"
                  >
                    <Box as="div">
                      <Flex>
                        <Icon as={SlPeople} fontSize="35px" />
                        <Spacer />
                        <Icon as={BsThreeDots} fontSize="35px" />
                      </Flex>
                    </Box>

                    <Box as="div">
                      <Flex>
                        <Box>
                          <Text as="p" fontWeight="extrabold" fontSize="24px">
                            1600
                          </Text>
                          <Text as="p" color="gray.400">
                            USers Active
                          </Text>
                        </Box>
                        <Spacer />
                        <Box as="div">
                          <Text as="h3" fontSize="20px" fontWeight="extrabold">
                            +55%
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </GridItem>

                <GridItem w="100%" bg="#292f50" color="white" rounded="lg">
                  <Flex
                    justifyContent="space-between"
                    flexDir="column"
                    gap={12}
                    as="div"
                    p="10"
                  >
                    <Box as="div">
                      <Flex>
                        <Icon as={IoMdJet} fontSize="35px" />
                        <Spacer />
                        <Icon as={BsThreeDots} fontSize="35px" />
                      </Flex>
                    </Box>

                    <Box as="div">
                      <Flex>
                        <Box>
                          <Text as="p" fontWeight="extrabold" fontSize="24px">
                            357
                          </Text>
                          <Text as="p" color="gray.400">
                            Click Events
                          </Text>
                        </Box>
                        <Spacer />
                        <Box as="div">
                          <Text as="h3" fontSize="20px" fontWeight="extrabold">
                            +124%
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </GridItem>

                <GridItem w="100%" bg="#292f50" color="white" rounded="lg">
                  <Flex
                    justifyContent="space-between"
                    flexDir="column"
                    gap={12}
                    as="div"
                    p="10"
                  >
                    <Box as="div">
                      <Flex>
                        <Icon as={GiShoppingCart} fontSize="35px" />
                        <Spacer />
                        <Icon as={BsThreeDots} fontSize="35px" />
                      </Flex>
                    </Box>

                    <Box as="div">
                      <Flex>
                        <Box>
                          <Text as="p" fontWeight="extrabold" fontSize="24px">
                            234
                          </Text>
                          <Text as="p" color="gray.400">
                            Purchase
                          </Text>
                        </Box>
                        <Spacer />
                        <Box as="div">
                          <Text as="h3" fontSize="20px" fontWeight="extrabold">
                            +14%
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </GridItem>

                <GridItem w="100%" bg="#292f50" color="white" rounded="lg">
                  <Flex
                    justifyContent="space-between"
                    flexDir="column"
                    gap={12}
                    as="div"
                    p="10"
                  >
                    <Box as="div">
                      <Flex>
                        <Icon as={FaRegThumbsUp} fontSize="35px" />
                        <Spacer />
                        <Icon as={BsThreeDots} fontSize="35px" />
                      </Flex>
                    </Box>

                    <Box as="div">
                      <Flex>
                        <Box>
                          <Text as="p" fontWeight="extrabold" fontSize="24px">
                            940
                          </Text>
                          <Text as="p" color="gray.400">
                            Likes
                          </Text>
                        </Box>
                        <Spacer />
                        <Box as="div">
                          <Text as="h3" fontSize="20px" fontWeight="extrabold">
                            +55%
                          </Text>
                        </Box>
                      </Flex>
                    </Box>
                  </Flex>
                </GridItem>
              </Grid>
            </GridItem>

            <GridItem
              w="100%"
              h="100%"
              p="4"
              bg="white"
              rounded="lg"
              shadow="lg"
            >
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                Reviews
              </Text>
              <Grid templateColumns="1fr" p="10" gap={10}>
                <GridItem>
                  <Box>
                    <Text fontSize="md" fontWeight="semibold" mb={1}>
                      Positive Reviews
                    </Text>

                    <Box display="flex" alignItems="center" gap={3}>
                      <Progress
                        value={80}
                        colorScheme="green"
                        size="sm"
                        flex="1"
                        borderRadius="md"
                      />
                      <Text fontSize="sm" fontWeight="medium">
                        80%
                      </Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="md" fontWeight="semibold" mb={1}>
                      Neutral Reviews
                    </Text>

                    <Box display="flex" alignItems="center" gap={3}>
                      <Progress
                        value={17}
                        size="sm"
                        flex="1"
                        borderRadius="md"
                      />
                      <Text fontSize="sm" fontWeight="medium">
                        17%
                      </Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem>
                  <Box>
                    <Text fontSize="md" fontWeight="semibold" mb={1}>
                      Negatve Reviews
                    </Text>

                    <Box display="flex" alignItems="center" gap={3}>
                      <Progress
                        value={3}
                        colorScheme="red"
                        size="sm"
                        flex="1"
                        borderRadius="md"
                      />
                      <Text fontSize="sm" fontWeight="medium">
                        3%
                      </Text>
                    </Box>
                  </Box>
                </GridItem>

                <GridItem>
                  <Flex justifyContent="end">
                    <Button
                      bg="#292f50"
                      color="white"
                      _hover={{ bg: "#295f55" }}
                      textTransform="uppercase"
                    >
                      View all reviews
                    </Button>
                  </Flex>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>

      <Grid templateColumns="1fr" pt="4" gap={6}>
        <Text
          fontSize="24px"
          fontWeight="extrabold"
          textTransform="uppercase"
          p="4"
        >
          Client FeedBack
        </Text>
        <Tabs variant="enclosed">
          <TabList>
            <Tab>Feedbacks</Tab>
            <Tab>More Feedbacks</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Grid
                templateColumns={{
                  base: "1fr",
                  lg: "repeat(2, 1fr)",
                }}
                gap={4}
              >
                {firstHalf.map((feed) => (
                  <GridItem key={feed.id} bg="white" shadow="lg" rounded="lg">
                    <Card>
                      <CardHeader>
                        <Image
                          boxSize="50px"
                          objectFit="cover"
                          src={feed.avatar}
                          alt={feed.clientName}
                          rounded="lg"
                        />
                      </CardHeader>
                      <CardBody>
                        <Stack divider={<StackDivider />} spacing="4">
                          <Box>
                            <Heading size="md" textTransform="uppercase">
                              {feed.clientName}
                            </Heading>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Role
                            </Heading>
                            <Text pt="2">🧑🏽‍💻 {feed.role}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Feedback
                            </Heading>
                            <Text pt="2">☎️ {feed.feedback}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Review
                            </Heading>
                            <Text pt="2">🔖 {feed.review}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Date
                            </Heading>
                            <Text pt="2">🗓️ {feed.date}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Rating
                            </Heading>
                            <Text pt="2">⭐️ {feed.rating}</Text>
                          </Box>
                        </Stack>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>

            <TabPanel>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
                gap={4}
              >
                {secondHalf.map((feed) => (
                  <GridItem key={feed.id} bg="white" shadow="lg" rounded="lg">
                    <Card>
                      <CardHeader>
                        <Image
                          boxSize="50px"
                          objectFit="cover"
                          src={feed.avatar}
                          alt={feed.clientName}
                          rounded="lg"
                        />
                      </CardHeader>
                      <CardBody>
                        <Stack divider={<StackDivider />} spacing="4">
                          <Box>
                            <Heading size="md" textTransform="uppercase">
                              {feed.clientName}
                            </Heading>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Role
                            </Heading>
                            <Text pt="2">🧑🏽‍💻 {feed.role}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Feedback
                            </Heading>
                            <Text pt="2">☎️ {feed.feedback}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Review
                            </Heading>
                            <Text pt="2">🔖 {feed.review}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Date
                            </Heading>
                            <Text pt="2">🗓️ {feed.date}</Text>
                          </Box>
                          <Box>
                            <Heading size="sm" textTransform="uppercase">
                              Rating
                            </Heading>
                            <Text pt="2">⭐️ {feed.rating}</Text>
                          </Box>
                        </Stack>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Grid>
    </Box>
  );
}
