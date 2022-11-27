import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Box, Text, Flex, HStack, VisuallyHidden, useColorModeValue as mode } from "@chakra-ui/react";
import { DarkModeSwitch } from "src/components/DarkModeSwitch/DarkModeSwitch.component";
import { MobileNav } from "./components/MobileNav.component";

export const Header = () => {
  const router = useRouter();

  return (
    <Box
      as="header"
      position={{ base: "static", lg: "sticky" }}
      bg={mode("white", "gray.800")}
      zIndex="10"
      top="0"
      w="100%"
      borderBottomWidth="1px"
    >
      <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
        <Flex as="nav" justify="space-between">
          <HStack spacing="8">
            <NextLink href="/" passHref>
              <Box as="a" rel="home">
                <VisuallyHidden>Victorien Druon</VisuallyHidden>
                <Text fontSize="4vh" fontWeight="extrabold" letterSpacing="tight">
                  🎯 Bet Optimizer
                </Text>
              </Box>
            </NextLink>
          </HStack>
          <Flex align="center">
            <HStack spacing="4">
              <DarkModeSwitch />
            </HStack>

            <Box ml="5">
              <MobileNav />
            </Box>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
