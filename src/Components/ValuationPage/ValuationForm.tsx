import { Flex, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, FunctionComponent } from "react";

interface IProps {
  setShowValuation: Dispatch<SetStateAction<boolean>>;
}

const ValuationForm: FunctionComponent<IProps> = (props: IProps) => {
  const router = useRouter();

  return (
    <Flex direction={"row"} gap={4} justifyContent={"center"}>
      <Button
        type="button"
        width={40}
        onClick={() => props.setShowValuation(true)}
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
  );
};

export default ValuationForm;
