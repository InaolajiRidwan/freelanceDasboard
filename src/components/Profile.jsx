import React, { lazy, Suspense } from "react";
import {
  Box,
  Grid,
  GridItem,
  Text,
  Card,
  Stack,
  Heading,
  Button,
  CardHeader,
  CardBody,
  Image,
  Progress,
  Icon,
  VStack,
} from "@chakra-ui/react";

import { profileInformation } from "../../data";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { profileConversations } from "../../data";
import { profileProjectsSummary } from "../../data";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

const ProfileCard = lazy(() => import("./ProfileCard.jsx"));

export default function Profile() {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const dataBar = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
    C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height} Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} fill={fill} />;
  };

  const dataPie = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={12}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <Box as="section">
      <Grid templateColumns="1fr" gap={10}>
        <ProfileCard />

        <GridItem>
          <Grid templateColumns={{ base: "1fr", xl: "repeat(3, 1fr)" }} gap={4}>
            <GridItem bg="white" shadow="lg" rounded="lg">
              <Card>
                <CardHeader>
                  <Heading pt="2" fontSize="lg" textTransform="uppercase" fontWeight="extrabold">
                    Profile Information
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stack spacing="4">
                    <Box width="100%">
                      <Text textTransform="uppercase" fontWeight="extrabold">
                        Biography
                      </Text>
                      <Text pt="1" fontSize="lg" width="100%" m="auto">
                        {profileInformation.bio}
                      </Text>
                    </Box>
                    <Box>
                      <Heading size="md" textTransform="uppercase">
                        FULL NAME: {profileInformation.name}
                      </Heading>
                      <Text pt="2" fontSize="md" textTransform="uppercase" fontWeight="extrabold">
                        ROLE: {profileInformation.role}
                      </Text>
                      <Text pt="2" fontSize="md" textTransform="uppercase" fontWeight="extrabold">
                        MOBILE: {profileInformation.phone}
                      </Text>
                    </Box>
                    <Box>
                      <Heading pt="2" fontSize="md" textTransform="uppercase" fontWeight="extrabold">
                        LOCATION: {profileInformation.location}
                      </Heading>
                      <Text pt="2" fontSize="lg" textTransform="uppercase" fontWeight="extrabold">
                        Social:
                        <Icon as={FaGithub} mx={1} />
                        <Icon as={FaFacebook} color="blue" mx={1} />
                        <Icon as={FaLinkedin} mx={1} />
                        <Icon as={FaTwitter} mx={1} />
                      </Text>
                    </Box>
                  </Stack>
                </CardBody>
              </Card>
              <Grid templateColumns="1fr" gap={6} m="10" fontSize="18px">
                {[
                  { label: "Total Earnings", value: "$53,878", trend: "+3.4%", color: "green" },
                  { label: "Total Users", value: "$3,478", trend: "+5.4%", color: "green" },
                  { label: "Today's Client", value: "$53,878", trend: "-1.4%", color: "red" },
                ].map((item, index) => (
                  <GridItem key={index} w="100%" shadow="xl" p="4" cursor="pointer">
                    <Text>{item.label}</Text>
                    <Text>{item.value}</Text>
                    <Text color={item.color} fontWeight="bold">
                      {item.trend}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </GridItem>

            <GridItem shadow="lg" bg="white" rounded="lg">
              <Card>
                <CardHeader>
                  <Heading size="md">Conversation</Heading>
                </CardHeader>
                <CardBody>
                  {profileConversations?.length > 0 ? (
                    <Stack spacing={4}>
                      {profileConversations.map((profile, index) => (
                        <Card key={index}>
                          <CardBody>
                            <Box display={{ lg: "flex" }} justifyContent="space-between" gap={2}>
                              <Box>
                                <Image
                                  boxSize={50}
                                  src={profile.avatar}
                                  alt={`Avatar of ${profile.subject}`}
                                />
                                <Text as="h3">{profile.subject}</Text>
                                <Text as="p">{profile.message}</Text>
                              </Box>
                              <Button bg={profile.read ? "blue.500" : "gray.300"}>
                                {profile.read ? "Reply" : "Read"}
                              </Button>
                            </Box>
                          </CardBody>
                        </Card>
                      ))}
                    </Stack>
                  ) : (
                    <Text p={4} fontStyle="italic" color="gray.600">
                      No recent conversations available.
                    </Text>
                  )}
                </CardBody>
              </Card>
            </GridItem>

            <GridItem bg="white" shadow="lg" rounded="lg">
              <Text as="h2" fontSize="18px" fontWeight="bold" p="4">
                Earnings Overview
              </Text>
              <Box w="100%" h={400}>
                <ResponsiveContainer>
                  <BarChart data={dataBar} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="uv" shape={<TriangleBar />} label={{ position: "top" }}>
                      {dataBar.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </Box>
              <Box w="100%" h={400}>
                <Text as="h2" fontSize="18px" fontWeight="bold" p="4">
                  Total Performance
                </Text>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={dataPie}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={renderCustomizedLabel}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {dataPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>

        <GridItem color="white" borderRadius="lg">
          <Text as="h2">Projects</Text>
          <Grid
            templateColumns={{ base: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
            justifyContent="center"
            gap={6}
          >
            {profileProjectsSummary.map((project) => (
              <GridItem key={project.id} w="100%" shadow="lg">
                <Card>
                  <CardBody>
                    <VStack align="start" spacing={4}>
                      <Text fontWeight="bold" fontSize="lg">
                        {project.name}
                      </Text>
                      <Text color="gray.700" fontSize="sm">
                        Status: {project.status}
                      </Text>
                      <Progress
                        value={project.progress}
                        colorScheme={project.progress === 100 ? "green" : "blue"}
                        hasStripe
                        isAnimated
                        w="100%"
                        borderRadius="md"
                        aria-label={`${project.name} progress is ${project.progress}%`}
                      />
                      <Text fontSize="xs">{project.progress}% complete</Text>
                    </VStack>
                  </CardBody>
                </Card>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
