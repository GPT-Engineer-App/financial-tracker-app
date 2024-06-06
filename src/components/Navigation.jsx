import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <Box bg="brand.700" p={4}>
      <Flex justify="space-between">
        <Button as={Link} to="/" colorScheme="teal" variant="ghost">
          Home
        </Button>
        <Button as={Link} to="/add-expense" colorScheme="teal" variant="ghost">
          Add Expense
        </Button>
        <Button as={Link} to="/add-saving" colorScheme="teal" variant="ghost">
          Add Saving
        </Button>
        <Button as={Link} to="/add-investment" colorScheme="teal" variant="ghost">
          Add Investment
        </Button>
      </Flex>
    </Box>
  );
};

export default Navigation;
