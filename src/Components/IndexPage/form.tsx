import { useState } from "react";
import { useRouter } from "next/router";
import {
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
  Text,
  Image,
  Box,
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
          setIsLoading(false);
          router.push({
            pathname: "/valuationConfirmation",
            query: {
              carNumberPlate,
              carMileage,
              valuationData: JSON.stringify(data),
            },
          });
        })
        .catch((error) => {
          setIsLoading(false);
          setRequestError(true);
        });
    }
  };

  return (
    <Flex
      direction="column"
      gap={2}
      background={"#FFF"}
      padding={"2"}
      width={"100%"}
      justifyContent="center" // Center the content horizontally
      alignItems="center" // Center the content vertically
      textAlign={"center"}
      height={"fit-content"}
      py={10}
    >
      <Image
        src="/LogoV3.png"
        alt="Sycta - The easy way to sell your car"
        w={500}
      />
      <Text
        color="#000"
        fontSize={"lg"}
        fontWeight={600}
        fontFamily="'M PLUS Rounded 1c', sans-serif"
      >
        Receive an instant valuation from your local trusted car buyer.
        <br /> Same day payment with no admin fees.
      </Text>
      <FormControl mt={4}>
        <FormLabel></FormLabel>
        <Input
          type="text"
          placeholder="YOUR REG"
          fontSize={{ base: "40px", sm: "40px", md: "60px" }}
          fontWeight={"bold"}
          textAlign={"center"}
          width={"100%"}
          height={"80px"}
          maxW={"385px"}
          maxLength={8}
          color={"#222"}
          mb={4}
          value={carNumberPlate}
          onChange={handleInputChange}
          fontFamily={"UKNumberPlate"}
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
          An error occurred. Please check your car number plate and try again.
        </Text>
      )}
    </Flex>
  );
};

export default Form;
