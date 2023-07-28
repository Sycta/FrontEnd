import { Flex, Button, Icon, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, FunctionComponent } from "react";
import { ImArrowDown } from "react-icons/im";

interface IProps {
  setShowValuation: Dispatch<SetStateAction<boolean>>;
  showValuation: boolean;
}

const ValuationForm: FunctionComponent<IProps> = (props: IProps) => {
  const router = useRouter();

  return (
    <>
      <Flex direction={"row"} gap={4} justifyContent={"center"}>
        <Button
          type="button"
          width={40}
          onClick={() => {
            props.setShowValuation(true);
          }}
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
      {props.showValuation && (
        <Flex
          direction={"column"}
          justifyContent={"center"}
          align={"center"}
          gap={4}
        >
          <Text
            color="white"
            fontSize={"1xl"}
            fontWeight={600}
            fontFamily="'M PLUS Rounded 1c', sans-serif"
          >
            Please view your car valuation below.
          </Text>
          <Icon as={ImArrowDown} boxSize={10} color={"#1f2e5a"} />
        </Flex>
      )}
    </>
  );
};

export default ValuationForm;
