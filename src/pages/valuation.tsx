import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import CarDetailsSection from "@/Components/ValuationPage/CarDetailsSection";
import ValuationForm from "@/Components/ValuationPage/ValuationForm";

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
      <Box backgroundColor="#00ADEF" minH="100vh" w="100%">
        <Flex
          direction="column"
          gap={4}
          background={"#00ADEF"}
          padding={"2"}
          width={"100%"}
          justifyContent="center" // Center the content horizontally
          alignItems="center" // Center the content vertically
          textAlign={"center"}
          height={"fit-content"}
          paddingTop={2}
          paddingBottom={6}
        >
          <Heading
            color="#1f2e5a"
            fontFamily="'M PLUS Rounded 1c', sans-serif"
            fontWeight={800}
            size={"2xl"}
          >
            Car Details
          </Heading>
          <Text
            color="white"
            fontSize={"lg"}
            fontWeight={500}
            fontFamily="'M PLUS Rounded 1c', sans-serif"
          >
            Are the following car details correct?
          </Text>

          <CarDetailsSection
            parsedValuationData={parsedValuationData}
            carMileage={carMileage}
            carNumberPlate={carNumberPlate}
          />
          {parsedValuationData && (
            <ValuationForm
              carMileage={carMileage}
              carNumberPlate={carNumberPlate}
              valuationData={valuationData}
            />
          )}
        </Flex>
      </Box>
    </>
  );
}
