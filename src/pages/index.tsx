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
          <Form />
          <hr color="#EAEAEA" style={{ height: "2px" }} />
          <Highlights />
          <Footer />
        </Flex>
      </main>
    </>
  );
}
