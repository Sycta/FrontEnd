import { useState } from "react"; // Import useState hook to handle form state
import { Flex, Heading, Box, Text, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

const listOfAssumptions = [
  "It has 6+months of MOT left",
  "It has no more than 2 previous owners",
  "It has full service history",
  "It is not a non-runner",
  "It is not a insurance write-off",
  "It has no damage, including interior or mechanical",
];

export default function MyDetails() {
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
        <Flex dir="row" alignItems="center" gap={1}>
          <IconButton
            icon={<ChevronLeftIcon boxSize={6} />}
            aria-label="Back logo"
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
          />
          <Text>Back</Text>
        </Flex>
        <Flex direction={"row"} justify={"space-between"} alignItems={"center"}>
          <Heading
            color="#1f2e5a"
            fontFamily={"Outfit, sans serif"}
            size={"xl"}
          >
            Your Valuation
          </Heading>
          <Box bg={"#1f2e5a"} px={4} py={2} borderRadius={"full"}>
            <Text fontSize={"xs"} color={"white"}>
              STEP 3 OF 3
            </Text>
          </Box>
        </Flex>
        <Flex direction={"column"}>
          <Heading
            color="#1f2e5a"
            fontFamily={"Outfit, sans serif"}
            size={"2xl"}
          >
            £{parsedValuationData.price + 207}*
          </Heading>
          <br />
          <Heading
            color="#1f2e5a"
            fontFamily={"Outfit, sans serif"}
            size={"md"}
          >
            Our valuation is guaranteed for 7 days
          </Heading>
          <Heading
            color="#1f2e5a"
            fontFamily={"Outfit, sans serif"}
            size={"md"}
          >
            Wait for our team to contact you shortly
          </Heading>
        </Flex>

        <Flex direction={"column"}>
          <Heading
            color="#1f2e5a"
            fontFamily={"Outfit, sans serif"}
            size={"sm"}
          >
            Assumptions we have made for your valuation:
          </Heading>

          {listOfAssumptions.map((assumption) => {
            return <Text fontSize={"sm"}>&emsp;- {assumption}</Text>;
          })}
          <Heading
            color="#1f2e5a"
            fontFamily={"Outfit, sans serif"}
            size={"sm"}
            mt={2}
          >
            If these assumptions are not correct, you can advise our team when
            we contact you.
          </Heading>
        </Flex>
      </Flex>
    </Box>
  );
}
