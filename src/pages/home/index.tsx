import React, { useState } from "react";
import type { NextPage } from "next";
import { Stack, Text, HStack, Input } from "@chakra-ui/react";
import { PageLayout } from "src/components/Layout/Pages/PageLayout.component";
import { Section } from "src/components/Layout/Section/Section.component";
import { H1 } from "src/components/Text/Titles.component";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <Section>
        <Stack spacing="16">
          <H1>Gamble without risks.</H1>
          <Text fontSize="xl">
            Choose the sporting event you want to bet on. Define a starting bet. We will do the rest.
          </Text>
          <HStack>
            <Input placeholder="Équipe 1" />
            <Input placeholder="Équipe 2" />
          </HStack>
          <HStack>
            <Input placeholder="Côte victoire équipe 1" />
            <Input placeholder="Côte nul" />
            <Input placeholder="Côte victoire équipe 2" />
          </HStack>
        </Stack>
      </Section>
    </PageLayout>
  );
};
export default Home;
