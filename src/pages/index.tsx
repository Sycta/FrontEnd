import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Form from "../Components/IndexPage/form";
import Highlights from "../Components/IndexPage/highlights";
import HowItWorks from "../Components/IndexPage/howItWorks";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sell My Car 2 Ahmad</title>
        <meta
          name="description"
          content="Value your own car now. Best prices guaranteed."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Box backgroundColor="#EAEAEA" h="100vh" w="100%">
          <Form />
          <Highlights />
          <HowItWorks />
        </Box>
      </main>
    </>
  );
}
