import React from "react";
import { Collectable, PageResponse } from "../models";
import { SimpleGrid } from "@chakra-ui/react";
import CollectableListItem from "./CollectalbeListItem";

type Props = {
  pages: PageResponse<Collectable>[];
};

export default function CollectableList({ pages }: Props) {
  return (
    <SimpleGrid columns={2} gap={6} width={"100%"} padding={4}>
      {pages.map((page) =>
        page.data.map((collectable) => (
          <CollectableListItem
            key={`${collectable.asset_contract.address}:${collectable.token_id}`}
            collectable={collectable}
          ></CollectableListItem>
        ))
      )}
    </SimpleGrid>
  );
}
