import client from "./client";
import { Collectable } from "../models/collectable";
import { PageResponse } from "../models";

export function fetchCollectable(contractAddress: string, tokenId: string) {
  return client
    .get(`/asset/${contractAddress}/${tokenId}`)
    .then((resp) => resp.data as Collectable);
}

export function fetchCollectables(
  owner: string,
  page: number = 0,
  pageSize: number = 20
): Promise<PageResponse<Collectable>> {
  return client
    .get("/assets", {
      params: {
        owner,
        offset: page * pageSize,
        limit: pageSize,
      },
    })
    .then((resp) => {
      const collectables = resp.data.assets ?? [];
      return {
        data: collectables,
        hasNext: collectables.length === pageSize,
      };
    });
}
