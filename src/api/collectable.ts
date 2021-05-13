import client from "./client";
import { Collectable } from "../models/collectable";
import { PageResponse } from "../models";

/**
 *  Get single collectable
 *
 * @param contractAddress - Address of the contract for this NFT
 * @param tokenId -Token ID for this item
 * @returns
 */
export function fetchCollectable(contractAddress: string, tokenId: string) {
  return client
    .get(`/asset/${contractAddress}/${tokenId}`)
    .then((resp) => resp.data as Collectable);
}

/**
 *  Get collectable list
 *
 * @param owner - Address of the owner of the assets
 * @param page - Page index
 * @param pageSize - Max results to return
 * @returns
 */
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
