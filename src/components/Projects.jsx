import React from "react";
import {
  Box,
  Text,
  Grid,
  GridItem,
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
  Center,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import ProfileCard from "./ProfileCard.jsx";
import { FiPlus } from "react-icons/fi";
import { profileViewProjects } from "../../data.jsx";
import { ProfileConversations } from "./ProfileConversations.jsx";

export default function Projects() {
  return (
    <Box as="section">
      <ProfileCard />

      <Tabs>
        <TabList pt="5">
          <Tab textTransform="uppercase">Some of Our Projects</Tab>
          <Tab textTransform="uppercase">Converstion</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Box as="div">
              <Grid templateColumns="1fr" gap={6}>
                <GridItem w="100%">
                  <Grid
                    p={{ md: "10" }}
                    templateColumns={{
                      base: "1fr",
                      md: "repeat(2, 1fr)",
                      xl: "repeat(4, 1fr)",
                    }}
                    gap={7}
                  >
                    {profileViewProjects?.length > 0 ? (
                      profileViewProjects.map((project) => {
                        return (
                          <Card key={project.id} maxW="sm" shadow="xl">
                            <CardBody>
                              {project.image ? (
                                <Image
                                  boxSize={{ base: "300px", md: "250px" }}
                                  src={project.image}
                                  objectFit="cover"
                                  borderRadius="md"
                                  fallbackSrc="https://via.placeholder.com/300"
                                  loading="lazy"
                                  alt={project.name || "Project Image"}
                                />
                              ) : (
                                <Center w="100%" h="100%">
                                  <Icon
                                    as={FiPlus}
                                    boxSize={12}
                                    color="gray.400"
                                  />
                                </Center>
                              )}

                              <Stack mt="6" spacing="3">
                                <Heading size="md">
                                  {project.name ? (
                                    project.name
                                  ) : (
                                    <Text
                                      as="p"
                                      textAlign="center"
                                      textTransform="uppercase"
                                    >
                                      Add new Project
                                    </Text>
                                  )}
                                </Heading>
                                <Text>
                                  {project.description ||
                                    "No description available"}
                                </Text>
                              </Stack>
                            </CardBody>

                            {project.participants ? <Divider /> : null}

                            {/* <CardFooter > 
                              <ButtonGroup spacing={6}>
                                {project.participants ? (
                                  <Button>
                                    Participants: {project.participants}
                                  </Button>
                                ) : (
                                  <Button visibility="hidden">
                                    Placeholder
                                  </Button> // keeps spacing
                                )}

                                {project.dueDate ? (
                                  <Button flexDir="column">
                                    <Text
                                      fontSize={{
                                        base: "8px",
                                        lg: "10px",
                                        xl: "16px",
                                      }}
                                    >
                                      Due Date:
                                    </Text>
                                    <Text
                                      fontSize={{
                                        base: "8px",
                                        lg: "10px",
                                        xl: "16px",
                                      }}
                                    >
                                      {project.dueDate}
                                    </Text>
                                  </Button>
                                ) : (
                                  <Button visibility="hidden">
                                    Placeholder
                                  </Button> // keeps spacing
                                )}
                              </ButtonGroup>
                            </CardFooter> */}

                            <CardFooter>
                              <ButtonGroup
                                spacing={{ base: 2, md: 4 }}
                                flexWrap="wrap"
                                justifyContent={{
                                  base: "center",
                                  md: "space-between",
                                }}
                              >
                                {project.participants ? (
                                  <Button
                                    fontSize={{
                                      base: "xs",
                                      md: "sm",
                                      lg: "md",
                                    }}
                                    p={{ base: 2, md: 4 }}
                                  >
                                    Participants: {project.participants}
                                  </Button>
                                ) : (
                                  <Button visibility="hidden">
                                    Placeholder
                                  </Button>
                                )}

                                {project.dueDate ? (
                                  <Button
                                    flexDir="column"
                                    fontSize={{
                                      base: "xs",
                                      md: "sm",
                                      lg: "md",
                                    }}
                                    p={{ base: 2, md: 4 }}
                                  >
                                    <Text>Due Date:</Text>
                                    <Text>{project.dueDate}</Text>
                                  </Button>
                                ) : (
                                  <Button visibility="hidden">
                                    Placeholder
                                  </Button>
                                )}
                              </ButtonGroup>
                            </CardFooter>
                          </Card>
                        );
                      })
                    ) : (
                      <Text> No projects available</Text>
                    )}
                  </Grid>
                </GridItem>
              </Grid>
            </Box>
          </TabPanel>
          <TabPanel>
            <ProfileConversations />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
