import React from "react";
import { ethers, providers } from "ethers";
import abi from "../abi/abi.json";

const Contract = () => {

  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-goerli.g.alchemy.com/v2/3Cfhb0ZB3R-Lr_9FIpnI4mPouvQkUr0f",
    5
  );
  const signer = new ethers.Wallet(
    "0d845b90a56f9e4709ba682e87be6a58417b27108c14ddeb7ab8c42251803559",
    provider
  );

  const bal = new ethers.Contract(
    "0x5399aA3fbe58539e40697B23446A78CD6f4bDCb9",
    abi,
    signer
  );

  return bal;
};

export default Contract;
