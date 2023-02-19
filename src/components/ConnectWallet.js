import { Contract, providers, utils } from "ethers";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { abi, File_CONTRACT_ADDRESS } from "../constants/index";
import { Web3Storage } from "web3.storage";

const ConnectWallet = () => {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  const [fileDetails, setFileDetails] = useState([]);

  const web3ModalRef = useRef();

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Mumbai network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 5) {
      window.alert("Change the network to Goerli");
      throw new Error("Change network to Goerli");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  /*
        connectWallet: Connects the MetaMask wallet
      */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  //   const uploadFiles = async () => {
  //     try {
  //       console.log("Uploading Files");
  //       // We need a Signer here since this is a 'write' transaction.
  //       const signer = await getProviderOrSigner(true);
  //       // Create a new instance of the Contract with a Signer, which allows
  //       // update methods
  //       const fContract = new Contract(File_CONTRACT_ADDRESS, abi, signer);
  //       // call the mint from the contract to mint the LW3Punks
  //       const tx = await fContract.mint({
  //         // value signifies the cost of one LW3Punks which is "0.01" eth.
  //         // We are parsing `0.01` string to ether using the utils library from ethers.js
  //         value: utils.parseEther("0.01"),
  //       });
  //       setLoading(true);
  //       // wait for the transaction to get mined
  //       await tx.wait();
  //       setLoading(false);
  //       window.alert("You successfully minted a LW3Punk!");
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "goerli",
        providerOptions: {},
        disableInjectedProvider: false,
      });

      connectWallet();
    }
  }, [walletConnected]);

  async function uploadFile() {
    // const token = process.env.NEXT_PUBLIC_WEB3STORAGE_API_TOKEN;
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGUyRDhBMzhEMkFlMTYxQzJBMjgyOWIzYjU0ZWVCMDc0Y2ExNmY0MzYiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzYxMjE4Mjg4NTQsIm5hbWUiOiJVbnNjcmlwdCJ9.zPbbK0msrBqZPhiHSEmwgAbEOzWbZ_jemYl77nOjt18";
    if (!token) {
      return console.error(
        "A token is needed. You can create one on https://web3.storage"
      );
    }
    const storage = new Web3Storage({ token });
    console.log(`Uploading ${files.length} files`);
    const cid = await storage.put(files);
    console.log("Uploading Files");
    //       // We need a Signer here since this is a 'write' transaction.
    const signer = await getProviderOrSigner();
    //       // Create a new instance of the Contract with a Signer, which allows
    //       // update methods
    const fContract = new Contract(File_CONTRACT_ADDRESS, abi, signer);
    fContract.addFiles("0x123", "Good", "50", "This is my photograph");
    console.log("Content added with CID:", cid);
    setFileDetails = fContract.getFileDetails();
  }

  const renderButton = () => {
    // If wallet is not connected, return a button which allows them to connect their wallet
    if (!walletConnected) {
      return <button onClick={connectWallet}>Connect your wallet</button>;
    }
  };

  return (
    <div>
      Hello world
      {renderButton}
      <ConnectWallet />
      <div>
        {setFileDetails.map((FileStructure) => {
          const url = "https://" + FileStructure.Cid + ".ipfs.dweb.link";
          <div>
            {FileStructure.fileCount} {FileStructure.Quality}
            {FileStructure.Accuracy}
            <a href={url}>View</a>
            {FileStructure.Description}
          </div>;
        })}
      </div>
    </div>
  );
};

export default ConnectWallet;
