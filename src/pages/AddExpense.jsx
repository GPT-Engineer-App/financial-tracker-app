import { Container, VStack, Input, Button, FormControl, FormLabel } from "@chakra-ui/react";
import { useState } from "react";

const AddExpense = () => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = () => {};

  return (
    <Container centerContent>
      <VStack spacing={4} mt={10}>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Input value={description} onChange={(e) => setDescription(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Date</FormLabel>
          <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>
          Add Expense
        </Button>
      </VStack>
    </Container>
  );
};

export default AddExpense;
