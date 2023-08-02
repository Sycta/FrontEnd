import { Box, Image } from "@chakra-ui/react";

export default function CarImage({ pictureSource }: { pictureSource: string }) {
  return (
    <Box
      bg="white"
      px={12}
      py={8}
      borderBottomRightRadius={{
        base: 8,
        sm: 8,
        md: 8,
        lg: 8,
      }}
      borderBottomLeftRadius={{
        base: 8,
        sm: 8,
        md: 0,
        lg: 0,
      }}
      borderTopRightRadius={{
        base: 0,
        sm: 0,
        md: 8,
        lg: 8,
      }}
      w={{ base: "100%", sm: "100%", md: "100%", lg: "100%" }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image src={pictureSource} />
    </Box>
  );
}
