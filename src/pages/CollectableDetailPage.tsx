import React from "react";
import { useParams } from "react-router";
import { useCollectable } from "../utils/collectable";
import CollectableDetail from "../components/CollectableDetail";
import { Spinner } from "@chakra-ui/spinner";

type Params = {
  contractAddress: string;
  tokenId: string;
};

export default function CollectableDetailPage() {
  const { contractAddress, tokenId } = useParams<Params>();
  const { data: collectable } = useCollectable(contractAddress, tokenId);

  if (!collectable) {
    return <Spinner />;
  }
  return <CollectableDetail collectable={collectable} />;
}
