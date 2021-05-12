import React from "react";
import { useParams } from "react-router";
import { useCollectable } from "../utils/collectable";
import CollectableDetail from "../components/CollectableDetail";

type Params = {
  contractAddress: string;
  tokenId: string;
};

export default function CollectableDetailPage() {
  const { contractAddress, tokenId } = useParams<Params>();
  const { data: collectable } = useCollectable(contractAddress, tokenId);
  return collectable ? <CollectableDetail collectable={collectable} /> : null;
}
