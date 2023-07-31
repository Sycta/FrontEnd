import { Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const ValuationForm = ({
  carNumberPlate,
  carMileage,
  valuationData,
}: {
  carNumberPlate: string | string[] | undefined;
  carMileage: string | string[] | undefined;
  valuationData: any;
}) => {
  const router = useRouter();

  return (
    <>
      <Flex direction={"row"} gap={4} justifyContent={"center"}>
        <Button
          type="button"
          width={40}
          onClick={() =>
            router.push({
              pathname: "/valuationConfirmation",
              query: {
                carNumberPlate,
                carMileage,
                valuationData: valuationData,
              },
            })
          }
          background={"#1f2e5a"}
          color={"white"}
          fontSize={"20px"}
          fontWeight={500}
          textAlign={"center"}
          p={6}
          loadingText="Loading"
          _hover={{
            background: "#1f2e5a",
          }}
        >
          Yes
        </Button>
        <Button
          type="button"
          width={40}
          onClick={() => router.push("/")}
          background={"#1f2e5a"}
          color={"white"}
          fontSize={"20px"}
          fontWeight={500}
          textAlign={"center"}
          p={6}
          loadingText="Loading"
          _hover={{
            background: "#1f2e5a",
          }}
        >
          No
        </Button>
      </Flex>
    </>
  );
};

export default ValuationForm;
