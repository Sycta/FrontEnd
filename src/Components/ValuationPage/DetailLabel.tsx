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
      <Heading fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}>
        {heading}
      </Heading>
      <Text fontSize={{ base: "xs", sm: "xs", md: "md", lg: "md" }}>
        &nbsp;{text}
      </Text>
    </Stack>
  );
}
