import { Box, Image } from "@chakra-ui/react";

export default function CarImage({ pictureSource }: { pictureSource: string }) {
  return (
    <Box
      bg="white"
      px={12}
      py={8}
      borderBottomRadius={8}
      h={"fit-content"}
      w={{ base: "95%", sm: "75%", md: "75%", lg: "50%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={pictureSource} />
    </Box>
  );
}
