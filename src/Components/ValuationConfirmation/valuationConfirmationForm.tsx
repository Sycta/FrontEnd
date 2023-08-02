import { useState } from "react";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Text,
  Textarea,
} from "@chakra-ui/react";

export default function ValuationConfirmationForm({
  improvedPrice,
  originalPrice,
  carDetails,
  carNumberPlate,
}: {
  improvedPrice: number;
  originalPrice: number;
  carDetails: any;
  carNumberPlate: string | string[] | undefined;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [query, setQuery] = useState("");
  const [inputError, setInputError] = useState(false);

  const handleButtonClick = () => {
    setRequestError(false);

    if (name && number) {
      setIsLoading(true);

      let baseUrl;
      if (process.env.NODE_ENV === "development") {
        baseUrl = "http://localhost:8080";
      } else {
        baseUrl = "https://buy-any-car-693543259e40.herokuapp.com";
      }

      const url = `${baseUrl}/api/v1/email`;

      const bodyContent = JSON.stringify({
        carDetails,
        name: name,
        phoneNumber: number,
        query: query,
        carReg: carNumberPlate,
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
          setIsLoading(false);
          setRequestSuccess(true);
          setRequestError(false);
        })
        .catch((error) => {
          setIsLoading(false);
          setRequestError(true);
          setRequestSuccess(false);
        });
    } else {
      setRequestError(false);
      setRequestSuccess(false);
      setInputError(true);
    }
  };

  return (
    <Flex
      direction="column"
      background={"#FFF"}
      padding={"2"}
      width={"100%"}
      justifyContent="center" // Center the content horizontally
      alignItems="center" // Center the content vertically
      textAlign={"center"}
      height={"fit-content"}
      w="fitContent"
      p={12}
      borderRadius={12}
    >
      <Text
        color="#00ADEF"
        fontSize={"2xl"}
        fontWeight={600}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
      >
        Our Valuation : £{improvedPrice}
      </Text>
      <Text
        color="#00ADEF"
        fontSize={"2xl"}
        fontWeight={600}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
      >
        WeBuyAnyCar : £{originalPrice}
      </Text>
      <Text
        color="black"
        fontSize={"1xl"}
        fontWeight={600}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
      >
        Receive an extra £{improvedPrice - originalPrice}
        <br />
        Our valuation is assuming your car is running smoothly and free from
        significant damage.
      </Text>

      <Text
        color="white"
        fontSize={"lg"}
        fontWeight={500}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
      >
        Fill out the form to arrange a viewing.
      </Text>
      <FormControl>
        <FormLabel>Full Name*</FormLabel>
        <Input
          type="text"
          placeholder="David Lloyd"
          mb={4}
          backgroundColor={"#fff"}
          color={"#222"}
          border={"#3e3e3e 2px solid"}
          borderRadius={"4px"}
          required
          onChange={(e) => {
            setName(e.target.value);
            setInputError(false);
          }}
        />
        <FormLabel>Mobile Number*</FormLabel>
        <Input
          type="number"
          placeholder="07456979578"
          mb={4}
          backgroundColor={"#fff"}
          color={"#222"}
          border={"#3e3e3e 2px solid"}
          borderRadius={"4px"}
          maxLength={11}
          onChange={(e) => {
            setNumber(e.target.value);
            setInputError(false);
          }}
        />
        <FormLabel>Further Details</FormLabel>
        <Textarea
          mb={4}
          backgroundColor={"#fff"}
          color={"#222"}
          border={"#3e3e3e 2px solid"}
          borderRadius={"4px"}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <Button
          type="submit"
          width={80}
          onClick={handleButtonClick}
          background={"#1f2e5a"}
          color={"white"}
          fontSize={"25px"}
          fontWeight={650}
          textAlign={"center"}
          p={6}
          isLoading={isLoading}
          loadingText="Loading"
          _hover={{
            background: "#1f2e5a",
          }}
        >
          {isLoading ? "Loading" : "Send Details"}
        </Button>
      </FormControl>
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
    </Flex>
  );
}
