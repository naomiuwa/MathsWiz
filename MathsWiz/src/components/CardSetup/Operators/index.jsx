//import { useState } from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "../RadioCard";

function Operators({ setOperator }) {
  const options = ["x", "÷", "+", "-"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "operators",
    defaultValue: "x",
    onChange: setOperator,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

export default Operators;
