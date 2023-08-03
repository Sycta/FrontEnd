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
  Image,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import {
  MdPerson,
  MdMail,
  MdPhoneAndroid,
  MdLocationPin,
} from "react-icons/md";

export default function MyDetails() {
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

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // You can perform any actions here with the form data
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Contact Number:", contactNumber);
    console.log("Post Code:", postCode);
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
                pathname: "/valuationConfirmation",
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
        <Flex direction={"row"} justify={"space-between"} alignItems={"center"}>
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
          <Flex direction="column" gap={4} py={4}>
            <FormControl>
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

            <FormControl>
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

            <FormControl>
              <FormLabel mb={2}>Contact Number *</FormLabel>
              <InputGroup>
                <Input
                  placeholder="Enter Your Phone Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  type="number"
                />
                <InputRightElement pointerEvents="none">
                  <Icon as={MdPhoneAndroid} />
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl>
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

            <Button
              fontFamily={"Outfit, sans serif"}
              type="submit"
              background={"#1f2e5a"}
              color={"white"}
              textAlign={"center"}
              p={6}
              onClick={() => {
                router.push({
                  pathname: "/valuationTwo",
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
