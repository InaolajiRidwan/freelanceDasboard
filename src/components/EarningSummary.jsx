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
  CardFooter,
  Heading,
  StackDivider,
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
  Area,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 590,
    pv: 800,
    amt: 1400,
  },
  {
    name: "Page B",
    uv: 868,
    pv: 967,
    amt: 1506,
  },
  {
    name: "Page C",
    uv: 1397,
    pv: 1098,
    amt: 989,
  },
  {
    name: "Page D",
    uv: 1480,
    pv: 1200,
    amt: 1228,
  },
  {
    name: "Page E",
    uv: 1520,
    pv: 1108,
    amt: 1100,
  },
  {
    name: "Page F",
    uv: 1400,
    pv: 680,
    amt: 1700,
  },
];

const data2 = [
  {
    name: "Page A",

    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",

    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",

    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",

    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",

    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",

    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",

    pv: 4300,
    amt: 2100,
  },
];

export default function EarningSummary() {
  return (
    <Box as="section">
      <Grid templateColumns="1fr">
        <GridItem>
          <Grid templateColumns={{ base: "1fr", md:"1fr", lg: "repeat(2, 1fr)" }} gap={6}>
            {/* Left Column: Card and Transaction Summary */}
            <GridItem>
              <Grid
                templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
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
                    templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)" }}
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
                          <Icon fontSize="40px" as={CiCreditCard1} />
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
                          <Icon fontSize="40px" as={FaPaypal} />
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
                {earningSummary.recentTransactions.map((transaction) => (
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
                              <Text fontSize="sm">{transaction.status}</Text>
                              <Text fontSize="sm">{transaction.date}</Text>
                            </Box>
                          </Flex>
                        </Stack>
                      </CardBody>
                    </Card>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem mt="50px">
          <Grid templateColumns={{base: "1fr", lg:"repeat(2, 1fr)"}} gap={4}>
            <GridItem>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart
                  data={data}
                  margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
                >
                  <CartesianGrid stroke="#f5f5f5" />
                  <XAxis dataKey="name" scale="band" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                  <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                </ComposedChart>
              </ResponsiveContainer>
            </GridItem>

            <GridItem>
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
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
