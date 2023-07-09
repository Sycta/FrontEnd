import { useRouter } from "next/router";
import {
  Flex,
  Center,
  Box,
  Heading,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";

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

  let parsedValuationData = JSON.parse(valuationData as string);

  console.log(parsedValuationData);

  return (
    <>
      <Flex
        backgroundColor="gray.800"
        minH="100vh"
        w="100%"
        color="white"
        align="center"
        justify="center"
        direction="column"
        px={12}
        textColor="black"
        py={4}
      >
        <Heading
          fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
          color={"white"}
        >
          Registration Number - {carNumberPlate}
        </Heading>
        <Heading
          fontSize={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
          color={"white"}
          mb={8}
        >
          Mileage - {carMileage}
        </Heading>
        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          w="100%"
          align={{ base: "center", sm: "center", md: "center", lg: "stretch" }}
          justify="center"
        >
          <Box
            bg={"white"}
            px={12}
            py={8}
            borderTopLeftRadius={{ base: 8, sm: 8, md: 8, lg: 8 }}
            borderTopRightRadius={{ base: 8, sm: 8, md: 8, lg: 0 }}
            w={{ base: "95%", sm: "75%", md: "75%", lg: "25%" }}
          >
            <Stack direction={"column"} gap={0}>
              <Heading fontSize={"2xl"}>Car Details</Heading>
              <Text fontSize={"l"}>
                Manufacturer: {parsedValuationData.manufacturer}
              </Text>
              <Text fontSize={"l"}>Model: {parsedValuationData.model}</Text>
              <Text fontSize={"l"}>Year: {parsedValuationData.year}</Text>
              <Text fontSize={"l"}>colour: {parsedValuationData.colour}</Text>
              <Text fontSize={"l"}>
                transmission: {parsedValuationData.transmission}
              </Text>
              <Text fontSize={"l"}>
                engineSize: {parsedValuationData.engineSize}
              </Text>
              <Text fontSize={"l"}>
                firstRegistered: {parsedValuationData.firstRegistered}
              </Text>
            </Stack>
          </Box>

          <Box
            bg={"white"}
            px={12}
            py={8}
            borderTopRightRadius={{ base: 0, sm: 0, md: 0, lg: 8 }}
            w={{ base: "95%", sm: "75%", md: "75%", lg: "25%" }}
          >
            <Stack direction={"column"} gap={0}>
              <Heading fontSize={"2xl"}>Car Valuation</Heading>
              <Text fontSize={"l"}>
                Our Valuation: £{parsedValuationData.price + 250}
              </Text>
              <Text fontSize={"l"}>
                We Buy Any Car Valuation: £{parsedValuationData.price}
              </Text>
            </Stack>
          </Box>
        </Flex>
        <Box
          bg="white" // Customize the background color as desired
          px={12}
          py={8}
          borderBottomRadius={8}
          h={"fit-content"}
          w={{ base: "95%", sm: "75%", md: "75%", lg: "50%" }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Image src={parsedValuationData.pictureSource} />
        </Box>
      </Flex>
    </>
  );
}
