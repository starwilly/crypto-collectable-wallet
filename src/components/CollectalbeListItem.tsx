import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Collectable } from "../models/collectable";

export default function CollectableListItem({
  collectable,
}: {
  collectable: Collectable;
}) {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center">
      <Image src={collectable.image_url} alt={collectable.collection.name} />
      {collectable.collection.name}
    </Box>
  );
}
