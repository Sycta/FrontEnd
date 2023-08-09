import IndividualInformationSection from "@/CommonComponents/IndividualInformationSectionProps";
import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { IoMdClock, IoMdMail, IoMdCash } from "react-icons/io";

const sections = [
  {
    heading: "1. Get a free, instant valuation",
    text: "Enter details about your car and receive a FREE valuation",
    icon: IoMdClock,
  },
  {
    heading: "2. Wait for us to contact you to book an appointment",
    text: "Enter your contact details and await to be contacted about an appointment",
    icon: IoMdMail,
  },
  {
    heading: "3. Sell your car to SYCTA & receive payment",
    text: "Immediate payment, via bank transfer with no additional fees",
    icon: IoMdCash,
  },
];

export default function HowItWorksSection() {
  return (
    <Box
      width={"100%"}
      px={{ base: 2, sm: 4, md: 12, lg: 32 }}
      background={"white"}
      textAlign={"center"}
    >
      <Heading
        color="#1f2e5a"
        fontFamily={"Outfit, sans serif"}
        fontWeight={800}
        size={"xl"}
        mt={4}
      >
        How it works
      </Heading>
      <Text
        color="#1f2e5a"
        fontFamily={"Outfit, sans serif"}
        fontSize={{ base: "sm", sm: "sm", md: "lg", lg: "lg" }}
        px={{ base: 0, sm: 0, md: 18, lg: 36 }}
      >
        With over 15 years experience in the industry, SYCTA understands the
        difficulties surrounding selling your used car.
        {<br />}
        We make it easy with a free instant valuation and same day payment
        following inspection.
        {<br />}
        We care about our customers and provide a fair valuation without over
        inflating to tempt you into approaching us.
        {<br />}
        Our appraisals are holistic and take into consideration age and mileage
        of your used car.
        {<br />}
        Here at SYCTA we want you to achieve the best price possible for your
        used car.
      </Text>
      <hr color="#EAEAEA" style={{ height: "2px", marginTop: "1rem" }} />
      <Flex
        direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
        background={"white"}
        py={4}
        gap={4}
        justifyContent={"center"}
      >
        {sections.map((section, index) => {
          return (
            <IndividualInformationSection
              key={index}
              icon={section.icon}
              heading={section.heading}
              text={section.text}
            />
          );
        })}
      </Flex>
      <Heading
        color="#1f2e5a"
        fontFamily={"Outfit, sans serif"}
        fontWeight={800}
        size={"md"}
        mb={12}
      >
        It really is easy as 1, 2, 3.
      </Heading>
    </Box>
  );
}
