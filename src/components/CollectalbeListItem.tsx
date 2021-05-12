import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Collectable } from "../models/collectable";
import { Link } from "react-router-dom";

export default function CollectableListItem({
  collectable,
}: {
  collectable: Collectable;
}) {
  const url = `/details/${collectable.asset_contract.address}/${collectable.token_id}`;
  return (
    <Link to={url}>
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Image src={collectable.image_url} alt={collectable.collection.name} />
        {collectable.collection.name}
      </Box>
    </Link>
  );
}
