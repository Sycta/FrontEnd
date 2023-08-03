import { Flex, Box } from "@chakra-ui/react";
import DetailsLabel from "./detailLabel";

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
    <Flex
      borderRadius={"20px"}
      bg={"#1f2e5a"}
      direction={"column"}
      color={"white"}
      width={"100%"}
      fontFamily={"Outfit, sans serif"}
      py={4}
      px={4}
      textAlign={"left"}
    >
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
  );
}
