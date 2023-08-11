import { Box, Image } from "@chakra-ui/react";

export default function CarImage({ pictureSource }: { pictureSource: string }) {
  return (
    <Box
      bg="white"
      w={"100%"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={pictureSource} />
    </Box>
  );
}
