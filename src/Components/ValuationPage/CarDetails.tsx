import { Flex, Box, Heading, Stack, Text, Image } from "@chakra-ui/react";

export default function CarDetails({
  parsedValuationData,
}: {
  parsedValuationData: any;
}) {
  return (
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
  );
}
