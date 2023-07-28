import { Flex, Box, Heading, Stack, Text, Image } from "@chakra-ui/react";
import DetailsLabel from "./DetailLabel";

export default function CarDetails({
  parsedValuationData,
  carNumberPlate,
  carMileage,
}: {
  parsedValuationData: any;
  carNumberPlate: any;
  carMileage: any;
}) {
  return (
    <Box
      bg={"white"}
      px={4}
      py={4}
      borderRight={"2px solid #EAEAEA"}
      borderBottom={{
        base: "2px solid #EAEAEA",
        sm: "2px solid #EAEAEA",
      }}
      borderBottomLeftRadius={{ base: 0, sm: 0, md: 8, lg: 8 }}
      borderTopRightRadius={{ base: 8, sm: 8, md: 0, lg: 0 }}
      borderTopLeftRadius={{ base: 8, sm: 8, md: 8, lg: 8 }}
      w={"100%"}
    >
      <Flex direction={"column"} textAlign={"left"} h={"100%"} px={2} py={2}>
        <DetailsLabel
          heading="Manufacturer"
          text={parsedValuationData.manufacturer}
        />
        <DetailsLabel heading="Model" text={parsedValuationData.model} />
        <DetailsLabel heading="Year" text={parsedValuationData.year} />
        <DetailsLabel heading="Colour" text={parsedValuationData.colour} />
        <DetailsLabel
          heading="Transmission"
          text={parsedValuationData.transmission}
        />
        <DetailsLabel
          heading="Engine Size"
          text={parsedValuationData.engineSize}
        />
        <DetailsLabel
          heading="First Registered"
          text={parsedValuationData.firstRegistered}
        />
        <DetailsLabel heading="Car Reg" text={carNumberPlate} />
        <DetailsLabel heading="Car Mileage" text={carMileage} />
      </Flex>
    </Box>
  );
}
