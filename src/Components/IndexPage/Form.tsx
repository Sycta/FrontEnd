import { useState } from "react";
import { useRouter } from "next/router";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Text,
  Heading,
} from "@chakra-ui/react";

const Form = () => {
  const router = useRouter();
  const [carNumberPlate, setCarNumberPlate] = useState("");
  const [carMileage, setCarMileage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState(false);

  const handleInputChange = (e: any) => {
    const capitalizedValue = e.target.value.toUpperCase();
    setCarNumberPlate(capitalizedValue);
  };

  const handleButtonClick = () => {
    // Reset the request error state
    setRequestError(false);

    if (carNumberPlate && carMileage) {
      setIsLoading(true);

      let baseUrl;
      if (process.env.NODE_ENV === "development") {
        baseUrl = "http://localhost:8080";
      } else {
        baseUrl = "https://buy-any-car-693543259e40.herokuapp.com"; // Replace with your production API URL
      }

      const url = `${baseUrl}/api/v1/valuation?reg=${carNumberPlate}&miles=${carMileage}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data here
          console.log(data);
          setIsLoading(false);
          router.push({
            pathname: "/valuation",
            query: {
              carNumberPlate,
              carMileage,
              valuationData: JSON.stringify(data),
            },
          });
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
          setIsLoading(false);
          setRequestError(true);
        });
    }
  };

  return (
    <Flex
      direction="column"
      gap={4}
      background={"#00ADEF"}
      padding={"2"}
      width={"100%"}
      alignItems="center"
      textAlign={"center"}
      height={"fit-content"}
      py={14}
    >
      <Heading
        color="#1f2e5a"
        fontFamily="'M PLUS Rounded 1c', sans-serif"
        fontWeight={700}
        size={"xl"}
      >
        Sell My Car 2 Ahmad.. Its easy
      </Heading>
      <Text
        color="white"
        fontSize={"xl"}
        fontWeight={500}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
      >
        A genuine offer to buy your car from your local trusted car <br />
        buyer. Same day payment with no admin fees.
      </Text>
      <FormControl mt={8}>
        <FormLabel></FormLabel>
        <Input
          type="text"
          placeholder="YOUR REG"
          fontSize={"60px"}
          fontWeight={"bold"}
          textAlign={"center"}
          alignContent={"center"}
          width={"100%"}
          height={"80px"}
          maxW={"385px"}
          maxLength={8}
          color={"#222"}
          value={carNumberPlate}
          fontFamily={"UKNumberPlate"}
          onChange={handleInputChange}
          border={"#3e3e3e 2px solid"}
          borderRadius={"4px"}
          backgroundColor={"#FDF035"}
        />
        <FormLabel></FormLabel>
        <Input
          type="number"
          placeholder="YOUR MILEAGE"
          fontSize={"40px"}
          fontWeight={"bold"}
          textAlign={"center"}
          width={"100%"}
          height={"60px"}
          maxW={"385px"}
          min={1}
          max={999999}
          maxLength={6}
          color={"#222"}
          mb={4}
          value={carMileage}
          onChange={(e) => {
            const value = e.target.value;
            if ((value as unknown as number) > 999999) {
              return;
            } else setCarMileage(e.target.value);
          }}
          fontFamily={"UKNumberPlate"}
          border={"#3e3e3e 2px solid"}
          borderRadius={"4px"}
          backgroundColor={"#fff"}
        />
      </FormControl>
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
        isDisabled={!carNumberPlate || !carMileage}
        className={
          !carNumberPlate || !carMileage
            ? "heartbeat-button-disabled"
            : "heartbeat-button-enabled"
        }
      >
        {isLoading ? "Loading" : "Value My Car"}
      </Button>
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
    </Flex>
  );
};

export default Form;
