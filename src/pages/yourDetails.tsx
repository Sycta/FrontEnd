import { useState } from "react"; // Import useState hook to handle form state
import {
  Flex,
  Heading,
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Icon,
  IconButton,
  Textarea,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  MdPerson,
  MdMail,
  MdPhoneAndroid,
  MdLocationPin,
} from "react-icons/md";

export default function YourDetails() {
  const router = useRouter();

  const {
    query: { carNumberPlate, carMileage, valuationData },
  } = router;

  let parsedValuationData = {
    manufacturer: "",
    model: "",
    year: 0,
    colour: "",
    transmission: "",
    engineSize: 0,
    firstRegistered: "",
    price: 0,
    pictureSource: "",
  };

  if (valuationData) {
    parsedValuationData = JSON.parse(valuationData as string);
  }

  // State variables for form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [query, setQuery] = useState("");

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (fullName && email && contactNumber) {
      let baseUrl;
      if (process.env.NODE_ENV === "development") {
        baseUrl = "http://localhost:8080";
      } else {
        baseUrl = "https://sycta-fab9d2536a62.herokuapp.com";
      }

      const url = `${baseUrl}/api/v1/email`;

      const bodyContent = JSON.stringify({
        carDetails: parsedValuationData,
        fullName,
        email,
        contactNumber,
        postCode,
        query,
        carNumberPlate,
        carMileage
      });

      fetch(url, {
        method: "POST",
        body: bodyContent,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {})
        .catch((error) => {});
    }
  };

  return (
    <Box backgroundColor="" minH="100vh" w="100%">
      <Flex
        direction="column"
        gap={4}
        background={"white"}
        width={"100%"}
        p={6}
        justifyContent="center"
        height={"fit-content"}
      >
        <Flex dir="row" alignItems="center" gap={1}>
          <IconButton
            icon={<ChevronLeftIcon boxSize={6} />}
            aria-label="Back logo"
            onClick={() => {
              router.push({
                pathname: "/yourCar",
                query: {
                  carNumberPlate,
                  carMileage,
                  valuationData: valuationData,
                },
              });
            }}
          />
          <Text>Back</Text>
        </Flex>

        <Flex
          direction={"row"}
          justify={{
            base: "space-between",
            sm: "space-between",
            md: "flex-start",
            lg: "flex-start",
          }}
          gap={{
            base: 0,
            sm: 0,
            md: 4,
            lg: 4,
          }}
          alignItems={"center"}
        >
          <Heading
            color="#1f2e5a"
            fontFamily={"Outfit, sans serif"}
            size={"xl"}
          >
            Your Details
          </Heading>
          <Box bg={"#1f2e5a"} px={4} py={2} borderRadius={"full"}>
            <Text fontSize={"xs"} color={"white"}>
              STEP 2 OF 3
            </Text>
          </Box>
        </Flex>

        <form onSubmit={handleSubmit}>
          <Flex
            direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
            gap={4}
            py={4}
            justify={"center"}
            wrap={"wrap"}
            px={2}
          >
            <FormControl
              width={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
            >
              <FormLabel mb={2}>Full Name *</FormLabel>
              <InputGroup>
                <Input
                  value={fullName}
                  placeholder="Enter Full Name"
                  onChange={(e) => setFullName(e.target.value)}
                  type="text"
                />
                <InputRightElement pointerEvents="none">
                  <Icon as={MdPerson} />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl
              width={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
            >
              <FormLabel mb={2}>Email *</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter Email Address"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <InputRightElement pointerEvents="none">
                  <Icon as={MdMail} />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl
              width={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
            >
              <FormLabel mb={2}>Contact Number *</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter Your Phone Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  type="tel"
                />
                <InputRightElement pointerEvents="none">
                  <Icon as={MdPhoneAndroid} />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl
              width={{ base: "100%", sm: "100%", md: "45%", lg: "45%" }}
            >
              <FormLabel mb={2}>Post Code</FormLabel>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Enter Your Postcode"
                  value={postCode}
                  onChange={(e) => setPostCode(e.target.value)}
                />
                <InputRightElement pointerEvents="none">
                  <Icon as={MdLocationPin} />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl
              width={{ base: "100%", sm: "100%", md: "90%", lg: "91%" }}
            >
              <FormLabel mb={2}>Extra Details</FormLabel>
              <InputGroup>
                <Textarea
                  placeholder="Please enter any extra details"
                  h={"125px"}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <Button
              fontFamily={"Outfit, sans serif"}
              type="submit"
              background={"#1f2e5a"}
              color={"white"}
              textAlign={"center"}
              w={{ base: "100%", sm: "100%", md: "25%", lg: "25%" }}
              p={6}
              isDisabled={
                fullName.length === 0 ||
                email.length === 0 ||
                contactNumber.length === 0
              }
              onClick={() => {
                router.push({
                  pathname: "/valuation",
                  query: {
                    carNumberPlate,
                    carMileage,
                    valuationData: valuationData,
                  },
                });
              }}
              _hover={{
                background: "#1f2e5a",
              }}
            >
              Submit
            </Button>
          </Flex>
        </form>
      </Flex>
    </Box>
  );
}
