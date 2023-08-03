import { Box, Text } from "@chakra-ui/react";

export default function IndividualCarDetails({
  heading,
  value,
}: {
  heading: any;
  value: any;
}) {
  return (
    <>
      <Box textAlign={"start"} w={"50%"} textTransform={"uppercase"}>
        <Text fontSize={"xl"}>{heading}</Text>
      </Box>
      <Box
        textAlign={"end"}
        w={"50%"}
        textTransform={"uppercase"}
        fontWeight={500}
      >
        <Text fontSize={"xl"}>{value}</Text>
      </Box>
    </>
  );
}
