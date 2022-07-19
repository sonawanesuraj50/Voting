import voteContract from "./abi/vote.json";
import { address } from "./ContractAddress";

export const voteInstance = (library: any) => {
  return new library.eth.Contract(voteContract, address.voting);
};
