import React from "react";
import {
  Box,
  CardBody,
  Grid,
  GridItem,
  Card,
  Flex,
  Text,
  Icon,
  Spacer,
  Stack,
  CardHeader,
  Heading,
  StackDivider,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import { profileInformation } from "../../data";
import { RiMastercardLine } from "react-icons/ri";
import { CiCreditCard1 } from "react-icons/ci";
import { FaPaypal } from "react-icons/fa";
import { earningSummary } from "../../data";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";

import { data, data2 } from "../../data";

export default function EarningSummary() {
  return (
    <Box as="section">
      <Grid templateColumns="1fr">
        <GridItem>
          <Grid templateColumns={{ base: "1fr", md: "1fr", xl: "1fr" }} gap={6}>
            {/* Left Column: Card and Transaction Summary */}
            <GridItem>
              <Grid
                templateColumns={{ base: "1fr", xl: "repeat(2, 1fr)" }}
                gap={6}
              >
                {/* Credit Card */}
                <GridItem p={4}>
                  <Card
                    bgGradient="linear(to-r, #5eaeea, #3687d1)"
                    borderRadius="lg"
                    h="100%"
                  >
                    <CardBody>
                      <Stack spacing={6}>
                        <Flex align="center">
                          <Box>
                            <Text fontSize="md" fontWeight="bold" color="white">
                              {profileInformation.name}
                            </Text>
                          </Box>
                          <Spacer />
                          <Box>
                            <Icon
                              fontSize="24px"
                              as={RiMastercardLine}
                              color="white"
                              aria-label="Mastercard Icon"
                            />
                          </Box>
                        </Flex>
                        <Text
                          fontSize="lg"
                          letterSpacing={2}
                          color="white"
                          fontWeight="semibold"
                        >
                          7653 2221 8900 7765 6789
                        </Text>
                        <Text
                          fontSize="lg"
                          letterSpacing={2}
                          color="whiteAlpha.700"
                          fontWeight="semibold"
                        >
                          XXXX XXXX XXXX XXXX
                        </Text>
                        <Flex justify="space-between">
                          <Box>
                            <Text
                              textTransform="uppercase"
                              fontSize="xs"
                              color="whiteAlpha.800"
                            >
                              Valid Thru
                            </Text>
                            <Text fontSize="sm" color="white">
                              05/30
                            </Text>
                          </Box>
                          <Box>
                            <Text
                              textTransform="uppercase"
                              fontSize="xs"
                              color="whiteAlpha.800"
                            >
                              CVV
                            </Text>
                            <Text fontSize="sm" color="white">
                              085x
                            </Text>
                          </Box>
                        </Flex>
                      </Stack>
                    </CardBody>
                  </Card>
                </GridItem>

                {/* Salary and PayPal Cards */}
                <GridItem p={4}>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
                  >
                    {/* Salary Card */}
                    <GridItem>
                      <Card
                        bg="#101c44"
                        color="whiteAlpha.900"
                        borderRadius="lg"
                        h="100%"
                      >
                        <CardHeader textAlign="center">
                          <Icon
                            fontSize="40px"
                            as={CiCreditCard1}
                            aria-label="Credit Card"
                          />
                          <Heading size="md" mt={2}>
                            Salary
                          </Heading>
                        </CardHeader>
                        <CardBody>
                          <Stack divider={<StackDivider />} spacing={4}>
                            <Box textAlign="center">
                              <Text fontSize="sm" fontWeight="semibold">
                                Belong Interactive
                              </Text>
                              <Text fontSize="lg" fontWeight="extrabold" mt={2}>
                                +2000
                              </Text>
                            </Box>
                          </Stack>
                        </CardBody>
                      </Card>
                    </GridItem>

                    {/* PayPal Card */}
                    <GridItem>
                      <Card
                        bg="#101c44"
                        color="whiteAlpha.900"
                        borderRadius="lg"
                        h="100%"
                      >
                        <CardHeader textAlign="center">
                          <Icon
                            fontSize="40px"
                            as={FaPaypal}
                            aria-label="PayPal Icon"
                          />
                          <Heading size="md" mt={2}>
                            Paypal
                          </Heading>
                        </CardHeader>
                        <CardBody>
                          <Stack divider={<StackDivider />} spacing={4}>
                            <Box textAlign="center">
                              <Text fontSize="sm" fontWeight="semibold">
                                Freelance Payment
                              </Text>
                              <Text fontSize="lg" fontWeight="extrabold" mt={2}>
                                $598
                              </Text>
                            </Box>
                          </Stack>
                        </CardBody>
                      </Card>
                    </GridItem>
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>

            {/* Right Column: Recent Projects */}
            <GridItem bg="#101c44" color="white" p={6} borderRadius="lg">
              <Text
                fontSize="lg"
                fontWeight="extrabold"
                textTransform="uppercase"
                mb={4}
              >
                Recent Projects
              </Text>
              <Grid templateColumns="1fr" gap={4}>
                {earningSummary?.recentTransactions?.length > 0 ? (
                  earningSummary?.recentTransactions.map((transaction) => (
                    <GridItem key={transaction.project}>
                      <Card
                        bg="transparent"
                        color="white"
                        border="1px"
                        borderColor="whiteAlpha.200"
                        borderRadius="lg"
                      >
                        <CardHeader>
                          <Heading size="md">{transaction.project}</Heading>
                        </CardHeader>
                        <CardBody>
                          <Stack divider={<StackDivider />} spacing={4}>
                            <Flex justify="space-between" align="center">
                              <Box>
                                <Text fontSize="sm">{transaction.client}</Text>
                                <Text fontSize="sm" fontWeight="bold">
                                  ${transaction.amount}
                                </Text>
                              </Box>
                              <Box textAlign="right">
                                <Text
                                  color={
                                    transaction.status === "Incomplete"
                                      ? "red.500"
                                      : "white"
                                  }
                                  fontSize="sm"
                                >
                                  {transaction.status}
                                </Text>
                                <Text fontSize="sm">{transaction.date}</Text>
                              </Box>
                            </Flex>
                          </Stack>
                        </CardBody>
                      </Card>
                    </GridItem>
                  ))
                ) : (
                  <Text>No recent transactions available.</Text>
                )}
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>

        <Box as="div" mt="50px">
          <Tabs variant="enclosed">
            <TabList>
              {" "}
              <Tab>Project Earnings</Tab>
              <Tab>Monthly Earnings</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Box>
                  <Grid
                    templateColumns={{
                      base: "1fr", // Single column for small screens
                      sm: "repeat(2, 1fr)", // Two columns for small screens
                      md: "repeat(3, 1fr)", // Three columns for medium screens
                    }}
                    gap={6}
                  >
                    {earningSummary?.projectEarnings?.length > 0 ? (
                      earningSummary?.projectEarnings.map((earning, index) => (
                        <Card key={index} align="center" shadow="lg">
                          <CardHeader>
                            <Heading size="md">{earning.project}</Heading>
                          </CardHeader>
                          <CardFooter>
                            <Button
                              _hover={{ bg: "blue.900" }}
                              color="white"
                              bg="#101c44"
                            >
                              💰{earning.amount}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))
                    ) : (
                      <Text>No monthly earnings data available.</Text>
                    )}
                  </Grid>
                </Box>
              </TabPanel>

              <TabPanel>
                <Box py="4">
                  <Grid
                    templateColumns={{
                      base: "1fr", // Single column for small screens
                      sm: "repeat(2, 1fr)", // Two columns for small screens
                      md: "repeat(3, 1fr)", // Three columns for medium screens
                    }}
                    gap={6}
                  >
                    {earningSummary?.monthlyEarnings?.length > 0 ? (
                      earningSummary.monthlyEarnings.map((earning, index) => (
                        <Card
                          key={index}
                          minW="200px"
                          align="center"
                          shadow="lg"
                        >
                          <CardHeader>
                            <Heading size="md">🗓️{earning.month}</Heading>
                          </CardHeader>
                          <CardFooter>
                            <Button
                              _hover={{ bg: "blue.900" }}
                              color="white"
                              bg="#101c44"
                            >
                              💰{earning.amount}
                            </Button>
                          </CardFooter>
                        </Card>
                      ))
                    ) : (
                      <Text>No monthly earnings data available.</Text>
                    )}
                  </Grid>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <GridItem mt="50px">
          <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={4}>
            <GridItem>
              <Box width="100%" height="400px">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={data}
                    width={500}
                    height={300}
                    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                  </ComposedChart>
                </ResponsiveContainer>
              </Box>
            </GridItem>

            <GridItem>
              <Box width="100%" height="400px">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    width={500}
                    height={300}
                    data={data2}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                    <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
