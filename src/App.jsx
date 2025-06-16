import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import { Box, Stack, Link, Text, Divider, Icon } from "@chakra-ui/react";
import { GoProject } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { HiOutlineTrendingUp } from "react-icons/hi";

// ✅ Lazy load components
const FeedBack = lazy(() => import("./components/FeedBack"));
const EarningSummary = lazy(() => import("./components/EarningSummary"));
const Profile = lazy(() => import("./components/Profile"));
const Projects = lazy(() => import("./components/Projects"));

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="#f6f9fc">
        <Box
          as="aside"
          position={{ base: "static", lg: "fixed" }}
          top="0"
          left="0"
          width={{ base: "100%", lg: "250px" }}
          height={{ base: "auto", lg: "100vh" }}
          bg="gray.100"
          boxShadow={{ base: "none", lg: "md" }}
          p="8"
          zIndex="10"
        >
          <Text fontWeight="bold" fontSize="lg" mb="4">
            Freelance Dashboard
          </Text>
          <Divider mb="4" />
          <Stack spacing="2">
            <Link as={RouterLink} to="/" p="3" _hover={{ bg: "white", borderRadius: "md" }}>
              <Box display="flex" alignItems="center" gap="4">
                <Icon as={FaUser} />
                <Text>Profile Overview</Text>
              </Box>
            </Link>
            <Link as={RouterLink} to="/Projects" p="3" _hover={{ bg: "white", borderRadius: "md" }}>
              <Box display="flex" alignItems="center" gap="4">
                <Icon as={GoProject} />
                <Text>Projects</Text>
              </Box>
            </Link>
            <Link as={RouterLink} to="/FeedBack" p="3" _hover={{ bg: "white", borderRadius: "md" }}>
              <Box display="flex" alignItems="center" gap="4">
                <Icon as={FaMessage} />
                <Text>Feedback</Text>
              </Box>
            </Link>
            <Link as={RouterLink} to="/EarningSummary" p="3" _hover={{ bg: "white", borderRadius: "md" }}>
              <Box display="flex" alignItems="center" gap="4">
                <Icon as={HiOutlineTrendingUp} />
                <Text>Earning Summary</Text>
              </Box>
            </Link>
          </Stack>
        </Box>

        <Box as="main" ml={{ base: "0", lg: "250px" }} p={{ base: 0, lg: "8" }} minH="100vh">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Profile />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/FeedBack" element={<FeedBack />} />
              <Route path="/EarningSummary" element={<EarningSummary />} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
