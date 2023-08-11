import Head from "next/head";
import { Box, Flex } from "@chakra-ui/react";
import Form from "../Components/IndexPage/form";
import Highlights from "../Components/IndexPage/highlights";
import HowItWorks from "../Components/HowItWorks/howItWorksSection";
import Navigation from "@/CommonComponents/Navbar";
import Footer from "@/CommonComponents/footer";

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
            <Form />
            <hr color="#EAEAEA" style={{ height: "0px", marginTop: "1rem" }} />
            <hr
              color="#EAEAEA"
              style={{ height: "0px", marginBottom: "1rem" }}
            />
            <Highlights />
          </Flex>
          <Footer />
        </Flex>
      </main>
    </>
  );
}
