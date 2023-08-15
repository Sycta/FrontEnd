import Head from "next/head";
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
} from "@chakra-ui/react";
import Navigation from "@/CommonComponents/Navbar";
import Footer from "@/CommonComponents/footer";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { IoMdCash, IoMdLock, IoMdCar } from "react-icons/io";
import { GoVerified } from "react-icons/go";
import { BsLightningFill, BsBank } from "react-icons/bs";
import IndividualInformationSection from "@/CommonComponents/IndividualInformationSectionProps";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sycta</title>
        <meta name="description" content="The easy way to sell your car." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex h="100vh" w="100%" direction="column">
          <Navigation />
          <Flex
            w="100%"
            direction={"column"}
            px={{ base: 2, sm: 4, md: 12, lg: 32 }}
            background={"white"}
            textAlign={"center"}
          >
            <CarValuationForm />
            <hr color="#EAEAEA" style={{ height: "0px", marginTop: "1rem" }} />
            <hr
              color="#EAEAEA"
              style={{ height: "0px", marginBottom: "1rem" }}
            />
            <SellingPoints />
          </Flex>
          <Footer />
        </Flex>
      </main>
    </>
  );
}

const CarValuationForm = () => {
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
        baseUrl = "https://sycta-fab9d2536a62.herokuapp.com"; // Replace with your production API URL
      }

      const url = `${baseUrl}/api/v1/valuation?reg=${carNumberPlate}&miles=${carMileage}`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          router.push({
            pathname: "/yourCar",
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
        fontFamily="Outfit, sans-serif"
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

const sections = [
  {
    icon: MdOutlineMoneyOffCsred,
    heading: "No Valuation Fees",
    text: "Get a valuation knowing there are no admin fees or hidden charges.",
  },
  {
    icon: IoMdCash,
    heading: "Higher Payouts",
    text: "We guarantee higher payments than all of our competitors.",
  },
  {
    icon: GoVerified,
    heading: "Instant Verification",
    text: "Experience instant verification of your cars details for a seamless selling process.",
  },
  {
    icon: BsLightningFill,
    heading: "Streamlined Process",
    text: "We streamline the car selling process to ensure a quick and efficient transaction.",
  },
  {
    icon: BsBank,
    heading: "We Settle Finance",
    text: "Any outstanding finance can be settled by our team.",
  },
  {
    icon: IoMdLock,
    heading: "Priced In",
    text: "Your instant car valuation is locked in for 7 days so you can book an appointment slot which suits you best.",
  },
  {
    icon: IoMdCar,
    heading: "All Cars Purchased",
    text: "We purchase all cars even including non-runners, insurance write-offs, scrap cars and more.",
  },
];

const SellingPoints = () => {
  return (
    <Flex
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      width={"100%"}
      background={"white"}
      px={{ base: 2, sm: 4, md: 8, lg: 16 }}
      py={4}
      gap={4}
      flexWrap={"wrap"}
      justifyContent={"center"}
      mb={12}
    >
      {sections.map((section, index) => {
        return (
          <IndividualInformationSection
            key={index}
            icon={section.icon}
            heading={section.heading}
            text={section.text}
          />
        );
      })}
    </Flex>
  );
};
