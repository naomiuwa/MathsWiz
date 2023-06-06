import {
  useCheckboxGroup,
  useCheckbox,
  chakra,
  Flex,
  Text,
  SimpleGrid,
} from "@chakra-ui/react";

function Factors() {
  function CustomCheckbox(props) {
    const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } =
      useCheckbox(props);

    return (
      <chakra.label
        display="flex"
        flexDirection="row"
        alignItems="center"
        gridColumnGap={2}
        maxW="40"
        bg={state.isChecked ? "teal.600" : "white"}
        border="1px solid"
        borderColor="teal.600"
        rounded="lg"
        px={3}
        py={1}
        cursor="pointer"
        transition="background-color 0.3s, border-color 0.3s"
        {...htmlProps}
      boxShadow={state.isChecked ? "outline" : "none"}
       
      >
        <input {...getInputProps()} hidden />
        <Flex
          alignItems="center"
          justifyContent="center"
       
        
          {...getCheckboxProps()}
        >
          {state.isChecked  }
        </Flex>
        <Text color={state.isChecked ? "white" : "black"} {...getLabelProps()}>
          {props.value}
        </Text>
      </chakra.label>
    );
  }

  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ["2"],
  });

  return (
    <div>
      <Text>The selected checkboxes are: {value.sort().join(" and ")}</Text>
      <SimpleGrid columns={3} spacing={10}>
        <CustomCheckbox {...getCheckboxProps({ value: "1" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "2" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "3" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "4" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "5" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "6" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "7" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "8" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "9" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "10" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "11" })} />
        <CustomCheckbox {...getCheckboxProps({ value: "12" })} />
      </SimpleGrid>
    </div>
  );
}

export default Factors;
