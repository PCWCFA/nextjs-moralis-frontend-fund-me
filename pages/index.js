import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { abi, contractAddress } from "../constants/constants";
//import { ethers } from "ethers";

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  // ethers.utils.parseEther("5");
  // const { runContractFunction } =
  const { data, error, runContractFunction, isFetching, isLoading } =
    useWeb3Contract({
      abi: abi,
      contractAddress: contractAddress,
      functionName: "getOwner",
    });

  return (
    <div>
      {isWeb3Enabled ? (
        <>
          "Connected!"
          <button onClick={() => runContractFunction()}>Get Owner</button>
          {data && <pre>{JSON.stringify(data)}</pre>}
        </>
      ) : (
        <>
          Next.js and Moralis Frontend
          <button onClick={() => enableWeb3()}>Connect</button>
        </>
      )}
    </div>
  );
}
