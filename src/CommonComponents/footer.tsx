"use client";

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
  Heading,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { ReactNode } from "react";
import { useRouter } from "next/router";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const router = useRouter();

  return (
    <Box
      bg={"white"}
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={"gray.300"}
      marginTop={"auto"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Heading
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontWeight={800}
          size={"xl"}
          mt={2}
        >
          SYCTA
        </Heading>
        <Stack direction={"row"} spacing={6}>
          <Box
            as="a"
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            Home
          </Box>
          <Box
            as="a"
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/howItWorks");
            }}
          >
            How it works
          </Box>
          <Box
            as="a"
            _hover={{
              cursor: "pointer",
            }}
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact Us
          </Box>
        </Stack>
      </Container>

      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© Sycta Developers</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Instagram"}
              href={"https://www.instagram.com/selltosycta/"}
            >
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
