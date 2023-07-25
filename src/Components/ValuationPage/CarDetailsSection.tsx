import { Flex } from "@chakra-ui/react";
import CarImage from "./CarImage";
import CarDetails from "./CarDetails";

export default function CarDetailsSection({
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
      justifyContent={"center"}
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      background={"inherit"}
      p={2}
      w={"fit-content"}
    >
      <CarDetails
        parsedValuationData={parsedValuationData}
        carNumberPlate={carNumberPlate}
        carMileage={carMileage}
      />
      <CarImage pictureSource={parsedValuationData.pictureSource} />
    </Flex>
  );
}
