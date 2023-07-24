import { useRouter } from "next/router";
import { Flex, Heading } from "@chakra-ui/react";
import CarImage from "@/Components/ValuationPage/CarImage";
import CarDetails from "@/Components/ValuationPage/CarDetails";
import { useEffect } from "react";

// sm 480px
// md 768px
// lg 992px
// xl 1280px
// 2xl 1536px

export default function Valuation() {
  const router = useRouter();

  const {
    query: { carNumberPlate, carMileage, valuationData },
  } = router;

  let parsedValuationData = {
    manufacturer: "",
    model: "",
    year: 0,
    colour: "",
    transmission: "",
    engineSize: 0,
    firstRegistered: "",
    price: 0,
    pictureSource: "",
  };

  if (valuationData) {
    parsedValuationData = JSON.parse(valuationData as string);
  }

  return (
    <>
      <Flex
        backgroundColor="#00ADEF"
        minH="100vh"
        w="100%"
        align="center"
        justify="center"
        direction="column"
        px={12}
        py={4}
      >
        <Heading
          fontSize={{ base: "md", sm: "lg", md: "xl", lg: "4xl" }}
          color={"1f2e5a"}
          fontFamily="'M PLUS Rounded 1c', sans-serif"
          fontWeight={800}
        >
          Registration Number - {carNumberPlate}
        </Heading>
        <Heading
          fontSize={{ base: "md", sm: "lg", md: "xl", lg: "4xl" }}
          color={"1f2e5a"}
          mb={8}
          fontFamily="'M PLUS Rounded 1c', sans-serif"
          fontWeight={800}
        >
          Mileage - {carMileage}
        </Heading>
        <CarDetails parsedValuationData={parsedValuationData} />
        <CarImage pictureSource={parsedValuationData.pictureSource} />
      </Flex>
    </>
  );
}
