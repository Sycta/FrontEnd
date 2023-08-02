import { Flex } from "@chakra-ui/react";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { IoMdCash, IoMdLock, IoMdCar } from "react-icons/io";
import { GoVerified } from "react-icons/go";
import { BsLightningFill, BsBank, BsFillLockFill } from "react-icons/bs";

import IndividualInformationSection from "@/CommonComponents/IndividualInformationSectionProps";

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
    text: "any outstanding finance can be settled by our team.",
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

export default function Highlights() {
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
}
