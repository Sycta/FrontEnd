import { Flex, Text, Heading, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface IndividualInformationSectionProps {
  icon?: IconType;
  heading: string;
  text: string;
}

const IndividualInformationSection: React.FC<
  IndividualInformationSectionProps
> = ({ icon, heading, text }) => {
  return (
    <Flex
      width={"100%"}
      justifyContent={"center"}
      px={{ base: 4, sm: 4, md: 4, lg: 6 }}
      py={{ base: 2, sm: 2, md: 6, lg: 6 }}
      direction={"column"}
      textAlign={"center"}
      alignItems={"center"}
      gap={2}
    >
      {icon && <Icon as={icon} boxSize={10} color={"#1f2e5a"} />}
      <Heading
        color={"#00adef"}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
        as="h4"
        fontSize={{ base: "16px", sm: "16px", md: "16px", lg: "20px" }}
        fontWeight={800}
      >
        {heading}
      </Heading>
      <Text fontSize={{ base: "14px", sm: "14px", md: "14px", lg: "16px" }}>
        {text}
      </Text>
    </Flex>
  );
};

export default IndividualInformationSection;
