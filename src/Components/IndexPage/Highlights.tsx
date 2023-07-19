import { Flex } from "@chakra-ui/react";
import { MdOutlineMoneyOffCsred } from "react-icons/md";
import { IoMdCash } from "react-icons/io";
import { GoVerified } from "react-icons/go";
import { BsLightningFill } from "react-icons/bs";
import HighlightsSection from "@/CommonComponents/HighlightsSection";

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
  // Add more sections as needed
];

// sm: 480px
// md: 768px
// lg: 992px
// xl: 1280px
// 2xl: 1536px

export default function Highlights() {
  return (
    <Flex
      direction={{ base: "column", sm: "column", md: "row", lg: "row" }}
      width={"100%"}
      background={"white"}
      px={{ base: 2, sm: 4, md: 12, lg: 32 }}
      py={12}
      gap={4}
    >
      {sections.map((section, index) => {
        return (
          <HighlightsSection
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
