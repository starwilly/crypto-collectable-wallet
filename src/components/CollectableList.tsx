import React from "react";
import { Collectable, PageResponse } from "../models";
import { Grid } from "@chakra-ui/react";
import CollectableListItem from "./CollectalbeListItem";

type Props = {
  pages: PageResponse<Collectable>[];
};

export default function CollectableList({ pages }: Props) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap={6}>
      {pages.map(({ data }) =>
        data.map((collectable) => (
          <CollectableListItem
            key={`${collectable.asset_contract.address}:${collectable.token_id}`}
            collectable={collectable}
          ></CollectableListItem>
        ))
      )}
    </Grid>
  );
}
