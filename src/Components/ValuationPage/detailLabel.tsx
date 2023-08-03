import { Text, Heading, Stack } from "@chakra-ui/react";

export default function DetailsLabel({
  heading,
  text,
}: {
  heading: string;
  text: any;
}) {
  return (
    <Stack dir="col" verticalAlign={"center"} gap={0}>
      <Heading size={"xs"} color={"#00ADEF"}>
        {heading}
      </Heading>
      <Heading size={"xs"}> &nbsp;{text}</Heading>
    </Stack>
  );
}
