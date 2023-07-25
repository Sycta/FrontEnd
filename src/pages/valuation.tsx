import { Flex, Heading, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useRouter } from "next/router";
import CarDetailsSection from "@/Components/ValuationPage/CarDetailsSection";
import ValuationForm from "@/Components/ValuationPage/ValuationForm";

// sm 480px
// md 768px
// lg 992px
// xl 1280px
// 2xl 1536px

export default function Valuation() {
  const router = useRouter();

  const [showValuation, setShowValuation] = useState(false);

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

  var improvedPrice = 0;

  if (valuationData) {
    parsedValuationData = JSON.parse(valuationData as string);
    improvedPrice =
      (parsedValuationData.price / 100) * 10 + parsedValuationData.price;
  }

  return (
    <>
      <Box backgroundColor="#EAEAEA" minH="100vh" w="100%">
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
          py={14}
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
            <ValuationForm setShowValuation={setShowValuation} />
          )}
        </Flex>
        {showValuation && (
          <Flex
            direction={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "column",
            }}
            width={"100%"}
            background={"EAEAEA"}
            px={{ base: 2, sm: 4, md: 12, lg: 32 }}
            py={12}
            gap={4}
            textAlign={"center"}
            id="valuation"
          >
            <Heading
              color="#1f2e5a"
              fontFamily="'M PLUS Rounded 1c', sans-serif"
              fontWeight={800}
              size={"2xl"}
            >
              Car Valuation
            </Heading>
            <Flex direction={"column"} textAlign={"center"} justify={"center"}>
              <Text
                color="#00adef"
                fontSize={"2xl"}
                fontWeight={600}
                fontFamily="'M PLUS Rounded 1c', sans-serif"
              >
                Our Valuation : £{improvedPrice}
              </Text>
              <Text
                color="#00adef"
                fontSize={"2xl"}
                fontWeight={600}
                fontFamily="'M PLUS Rounded 1c', sans-serif"
              >
                WeBuyAnyCar : £{parsedValuationData.price}
              </Text>
              <Text
                color="black"
                fontSize={"1xl"}
                fontWeight={600}
                fontFamily="'M PLUS Rounded 1c', sans-serif"
              >
                Receive an extra £{improvedPrice - parsedValuationData.price}
                <br />
                Our valuation is assuming your car is running smoothly and free
                from significant damage.
              </Text>
            </Flex>
          </Flex>
        )}
      </Box>
    </>
  );
}
