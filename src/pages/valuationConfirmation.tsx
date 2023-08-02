import { useRouter } from "next/router";
import { Flex, Box, Heading } from "@chakra-ui/react";
import ValuationConfirmationForm from "@/Components/ValuationConfirmation/valuationConfirmationForm";

export default function ValuationConfirmation() {
  const router = useRouter();

  const {
    query: { carNumberPlate, carMileage, valuationData },
  } = router;

  var improvedPrice = 0;

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
    improvedPrice = parsedValuationData.price + 207;
  }

  return (
    <>
      <Box backgroundColor="#00ADEF" minH="100vh" w="100%">
        <Flex
          direction="column"
          gap={4}
          background={"#00ADEF"}
          width={"100%"}
          p={6}
          justifyContent="center" // Center the content horizontally
          alignItems="center" // Center the content vertically
          textAlign={"center"}
          height={"fit-content"}
        >
          <Heading
            color="#1f2e5a"
            fontFamily="'M PLUS Rounded 1c', sans-serif"
            fontWeight={800}
            size={"2xl"}
          >
            Car Valuation
          </Heading>
          <ValuationConfirmationForm
            improvedPrice={improvedPrice}
            originalPrice={parsedValuationData.price}
            carDetails={parsedValuationData}
            carNumberPlate={carNumberPlate}
          />
        </Flex>
      </Box>
    </>
  );
}
