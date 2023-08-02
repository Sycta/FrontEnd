import IndividualInformationSection from "@/CommonComponents/IndividualInformationSectionProps";
import { Flex, Heading, Box } from "@chakra-ui/react";

const sections = [
  {
    heading: "1. Get a free valuation",
    text: "Enter details about your car and receive a FREE valuation",
  },
  {
    heading: "2. Await appointment",
    text: "Enter your contact details and await to be contacted about an appointment",
  },
  {
    heading: "3. Car inspection",
    text: "After a vehicle inspection and test drive we can confirm the purchase",
  },
  {
    heading: "4. Receive payment",
    text: "Immediate payment, via bank transfer with no additional fees",
  },
];

export default function HowItWorks() {
  return (
    <Box
      width={"100%"}
      px={{ base: 2, sm: 4, md: 12, lg: 32 }}
      background={"white"}
      textAlign={"center"}
    >
      <hr color="#EAEAEA" style={{ height: "2px" }} />
      <Heading
        color="#1f2e5a"
        fontFamily="'M PLUS Rounded 1c', sans-serif"
        fontWeight={800}
        size={"lg"}
        mt={4}
      >
        How it works
      </Heading>
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
              icon={undefined}
              heading={section.heading}
              text={section.text}
            />
          );
        })}
      </Flex>
    </Box>
  );
}
