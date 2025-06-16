import { Box, Flex, Image, Text, Spacer } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { profileInformation } from "../../data";

export default function ProfileCard() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [setTime]);
  return (
    <Box as="div" color="black" bg="white" shadow="lg" p="7" rounded="lg">
      <Flex alignItems="center" direction={{ base: "column", lg: "row" }}>
        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems="center"
          gap="4"
        >
          <Box>
            <Image
              borderRadius="full"
              boxSize="100px"
              src={profileInformation.avatar}
              alt="Dan Abramov"
              
            />
          </Box>
          <Box>
            <Text>
              {time?.getHours() < 12 ? "Good Morning 🌞" : "Good Afternoon 🌙"}
            </Text>
            <Text as="h1" fontWeight="extrabold" fontSize="24px">
              {profileInformation.name}
            </Text>
          </Box>
        </Box>
        <Spacer />
        <Box fontWeight="bold" fontSize="18px">
          <Text>{time?.toLocaleTimeString()}</Text>
          <Text>{time?.toLocaleDateString()}</Text>
        </Box>
      </Flex>
    </Box>
  );
}
