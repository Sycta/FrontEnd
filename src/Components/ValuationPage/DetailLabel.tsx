import { Text, Heading, Box, Flex, Stack, HStack } from "@chakra-ui/react";

export default function DetailsLabel({
  heading,
  text,
}: {
  heading: string;
  text: any;
}) {
  return (
    <Stack dir="col" verticalAlign={"center"} gap={0}>
      <Heading fontSize={"l"}>{heading}</Heading>
      <Text fontSize={"sm"}>&nbsp;{text}</Text>
    </Stack>
  );
}
