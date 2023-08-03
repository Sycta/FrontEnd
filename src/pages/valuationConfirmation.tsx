import { useRouter } from "next/router";
import { Flex, Box, Heading, Text, Button, Image } from "@chakra-ui/react";
import CarImage from "@/Components/ValuationPage/carImage";
import IndividualCarDetails from "@/Components/ValuationPage/individualCarDetails";

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
      <Box backgroundColor="" minH="100vh" w="100%">
        <Flex
          direction="column"
          gap={4}
          background={"white"}
          width={"100%"}
          p={6}
          justifyContent="center"
          height={"fit-content"}
        >
          <Flex
            direction={"row"}
            justify={"space-between"}
            alignItems={"center"}
          >
            <Heading
              color="#1f2e5a"
              fontFamily={"Outfit, sans serif"}
              size={"2xl"}
            >
              Your Car
            </Heading>
            <Box bg={"#1f2e5a"} px={4} py={2} borderRadius={"full"}>
              <Text fontSize={"xs"} color={"white"}>
                STEP 1 OF 3
              </Text>
            </Box>
          </Flex>
          <CarImage pictureSource={parsedValuationData.pictureSource} />

          <Box>
            <Heading
              color="#1f2e5a"
              fontFamily={"Outfit, sans serif"}
              size={"xl"}
            >
              {carNumberPlate}
            </Heading>
            <Text fontSize={"xl"} fontWeight={500}>
              {parsedValuationData.manufacturer}
            </Text>
            <Text fontSize={"xl"} fontWeight={500}>
              {parsedValuationData.model}
            </Text>
          </Box>
          <Flex dir="row" justify="space-between" wrap={"wrap"}>
            <IndividualCarDetails
              heading={"year"}
              value={parsedValuationData.year}
            />
            <IndividualCarDetails
              heading={"Colour"}
              value={parsedValuationData.colour}
            />
            <IndividualCarDetails
              heading={"Transmission"}
              value={parsedValuationData.transmission}
            />
            <IndividualCarDetails
              heading={"Engine Size"}
              value={parsedValuationData.engineSize}
            />
            <IndividualCarDetails
              heading={"First Registered"}
              value={parsedValuationData.firstRegistered}
            />
            <IndividualCarDetails heading={"Mileage"} value={carMileage} />
          </Flex>
          <Button
            fontFamily={"Outfit, sans serif"}
            type="submit"
            background={"#464646"}
            color={"white"}
            textAlign={"center"}
            p={6}
            _hover={{
              background: "#464646",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            NOT MY CAR
          </Button>
          <Button
            fontFamily={"Outfit, sans serif"}
            type="submit"
            background={"#1f2e5a"}
            onClick={() => {
              router.push({
                pathname: "/myDetails",
                query: {
                  carNumberPlate,
                  carMileage,
                  valuationData: valuationData,
                },
              });
            }}
            color={"white"}
            textAlign={"center"}
            p={6}
            _hover={{
              background: "#1f2e5a",
            }}
          >
            STEP 2 : MY DETAILS
          </Button>
        </Flex>
      </Box>
    </>
  );
}
