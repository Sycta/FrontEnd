import Navigation from "@/CommonComponents/Navbar";
import Footer from "@/CommonComponents/footer";
import {
  Box,
  Flex,
  Heading,
  Text,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Icon,
  InputRightElement,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  MdPerson,
  MdMail,
  MdPhoneAndroid,
  MdLocationPin,
} from "react-icons/md";

export default function Contact() {
  // State variables for form inputs
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [query, setQuery] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [inputError, setInputError] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setRequestError(false);
    setInputError(false);
    setRequestSuccess(false);

    if (fullName && email && contactNumber && query) {
      setIsLoading(true);

      let baseUrl;
      if (process.env.NODE_ENV === "development") {
        baseUrl = "http://localhost:8080";
      } else {
        baseUrl = "https://buy-any-car-693543259e40.herokuapp.com";
      }

      const url = `${baseUrl}/api/v1/email`;

      const bodyContent = JSON.stringify({
        carDetails: null,
        fullName,
        email,
        contactNumber,
        postCode,
        query,
      });

      fetch(url, {
        method: "POST",
        body: bodyContent,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          if (data.status != "OK") {
            setIsLoading(false);
            setRequestError(true);
            setRequestSuccess(false);
          } else {
            setIsLoading(false);
            setRequestSuccess(true);
            setRequestError(false);
          }
        });
    } else {
      setRequestError(false);
      setRequestSuccess(false);
      setInputError(true);
    }
  };

  return (
    <Flex h="100vh" w="100%" direction={"column"}>
      <Navigation />
      <Box
        width={"100%"}
        px={{ base: 2, sm: 4, md: 12, lg: 32 }}
        background={"white"}
        textAlign={"center"}
      >
        <Heading
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontWeight={800}
          size={"xl"}
          mt={4}
        >
          Contact Us
        </Heading>
        <Text
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontSize={"xl"}
          px={{ base: 0, sm: 0, md: 18, lg: 36 }}
        >
          Please do not hesitate to contact us if you have any questions about
          selling your car.
        </Text>
        <Text
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontSize={"md"}
          px={{ base: 0, sm: 0, md: 18, lg: 36 }}
        >
          - Head Office: SYCTA, 574 Manchester road, Atrium House, Greater
          Manchester, BL99SW
        </Text>
        <Text
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontSize={"md"}
          px={{ base: 0, sm: 0, md: 18, lg: 36 }}
        >
          Tel: 07402 715916
        </Text>
        <Text
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontSize={"md"}
          px={{ base: 0, sm: 0, md: 18, lg: 36 }}
        >
          Email: syctasales@gmail.com
        </Text>
        <Text
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontSize={"md"}
          px={{ base: 0, sm: 0, md: 18, lg: 36 }}
        >
          Instagram: @selltosycta
        </Text>
        <hr color="#EAEAEA" style={{ height: "2px", marginTop: "1rem" }} />
        <Heading
          color="#1f2e5a"
          fontFamily={"Outfit, sans serif"}
          fontWeight={800}
          size={"lg"}
          mt={4}
        >
          Submit a general enquiry
        </Heading>
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
              <FormLabel mb={2}>Extra Details *</FormLabel>
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
              isLoading={isLoading}
              loadingText="Sending Query"
              onClick={() => {}}
              _hover={{
                background: "#1f2e5a",
              }}
            >
              Submit
            </Button>
          </Flex>
        </form>
        {requestError && (
          <Text
            color="red.500"
            textAlign="center"
            fontWeight={700}
            fontSize={"15px"}
          >
            An error occurred. Please try again.
          </Text>
        )}
        {inputError && (
          <Text
            color="red.500"
            textAlign="center"
            fontWeight={700}
            fontSize={"15px"}
          >
            Please fill all fields with a *
          </Text>
        )}
        {requestSuccess && (
          <Text
            color="green.500"
            textAlign="center"
            fontWeight={700}
            fontSize={"15px"}
          >
            Successfully sent details.
          </Text>
        )}
      </Box>
      <Footer />
    </Flex>
  );
}
