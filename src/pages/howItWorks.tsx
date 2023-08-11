import Navigation from "@/CommonComponents/Navbar";
import Footer from "@/CommonComponents/footer";
import HowItWorksSection from "@/Components/HowItWorks/howItWorksSection";
import { Flex } from "@chakra-ui/react";

export default function howItWorks() {
  return (
    <Flex h="100vh" w="100%" direction="column">
      <Navigation />
      <HowItWorksSection />
      <Footer />
    </Flex>
  );
}
