import { Container, VStack, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const AddInvestment = () => {
  const [name, setName] = useState("");
  const [currentValue, setCurrentValue] = useState("");
  const [returnRate, setReturnRate] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {};

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Current Value</FormLabel>
          <Input type="number" value={currentValue} onChange={(e) => setCurrentValue(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Return Rate</FormLabel>
          <Input type="number" value={returnRate} onChange={(e) => setReturnRate(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>
          Add Investment
        </Button>
      </VStack>
    </Container>
  );
};

export default AddInvestment;
