const { ethers } = require("hardhat");
require("dotenv").config({ path: "./env" });

async function main() {
  const metadataURL = "ipfs://QmWFjnaBp8E4pDWmq9QHVkPCPnwggXTaJZShvnbvYUsGT3";
  const FilesContract = await ethers.getContractFactory("Files");

  // deploy the contract
  const deployedFilesContract = await FilesContract.deploy();

  await deployedFilesContract.deployed();

  // print the address of the deployed contract
  console.log("Deployed Contract Address:", deployedFilesContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
