export const File_CONTRACT_ADDRESS =
  "0xcD2C73b6cDa1a56a99A2dD995c6C142cCbd3E565";
export const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "FileStructureMapping",
    outputs: [
      {
        internalType: "uint256",
        name: "fileCount",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "Cid",
        type: "string",
      },
      {
        internalType: "string",
        name: "Quality",
        type: "string",
      },
      {
        internalType: "string",
        name: "Accuracy",
        type: "string",
      },
      {
        internalType: "string",
        name: "Description",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "Cid",
        type: "string",
      },
      {
        internalType: "string",
        name: "Quality",
        type: "string",
      },
      {
        internalType: "string",
        name: "Accuracy",
        type: "string",
      },
      {
        internalType: "string",
        name: "Description",
        type: "string",
      },
    ],
    name: "addFiles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fileCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFileDetails",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "fileCount",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "Cid",
            type: "string",
          },
          {
            internalType: "string",
            name: "Quality",
            type: "string",
          },
          {
            internalType: "string",
            name: "Accuracy",
            type: "string",
          },
          {
            internalType: "string",
            name: "Description",
            type: "string",
          },
        ],
        internalType: "struct Files.FileStructure[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserDetails",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_email",
        type: "string",
      },
      {
        internalType: "string",
        name: "_profession",
        type: "string",
      },
      {
        internalType: "string",
        name: "_mobileNo",
        type: "string",
      },
      {
        internalType: "string",
        name: "_gender",
        type: "string",
      },
    ],
    name: "registerUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "userId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userMapping",
    outputs: [
      {
        internalType: "address",
        name: "userAdd",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "email",
        type: "string",
      },
      {
        internalType: "string",
        name: "profession",
        type: "string",
      },
      {
        internalType: "string",
        name: "mobileNo",
        type: "string",
      },
      {
        internalType: "string",
        name: "gender",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "totalNumberOfFiles",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
