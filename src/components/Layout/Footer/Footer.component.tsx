import React from "react";
import { Box, Stack, StackDivider, Text } from "@chakra-ui/react";

import { Copyright } from "./components/Copyright.component";

export const Footer: React.FC = () => {
  return (
    <Box mt="24">
      <Box borderTopWidth="1px">
        <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: "4", md: "8" }}>
          <Stack spacing="10" divider={<StackDivider />}>
            <Stack direction={{ base: "column-reverse", md: "row" }} justifyContent="space-between" alignItems="center">
              <Copyright />
              <Text fontSize="sm">Bet Optimizer</Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
