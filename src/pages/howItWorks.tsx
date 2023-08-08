import Navigation from "@/CommonComponents/Navbar";
import HowItWorksSection from "@/Components/HowItWorks/howItWorksSection";
import { Box } from "@chakra-ui/react";

export default function howItWorks() {
  return (
    <Box h="100vh" w="100%">
      <Navigation />
      <HowItWorksSection />
    </Box>
  );
}
