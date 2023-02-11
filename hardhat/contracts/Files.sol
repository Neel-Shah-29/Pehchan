// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.5.0 <0.9.0;

contract Files {
    // declaring User structure
    struct User {
        address userAdd;
        uint256 userId;
        string name;
        string email;
        string profession;
        string mobileNo;
        string gender;
        uint256 totalNumberOfFiles;
    }

    // declaring file structure
    struct FileStructure {
        uint256 fileCount;
        string Cid;
        string Quality;
        string Accuracy;
    }

    //for retreiving user details from user Address
    mapping(address => User) public userMapping;

    //for retreiving uploaded files from user Address
    mapping(address => FileStructure[]) public FileStructureMapping;

    uint256 public fileCount;
    uint256 public userId;

    constructor() {
        fileCount = 0;
        userId = 1;
    }

    //add new User and map it with userAdress
    function registerUser(
        string memory _name,
        string memory _email,
        string memory _profession,
        string memory _mobileNo,
        string memory _gender
    ) public {
        userMapping[msg.sender] = User(
            msg.sender,
            userId,
            _name,
            _email,
            _profession,
            _mobileNo,
            _gender,
            0
        );
        userId++;
    }

    //add uploaded files and map it with userAddress
    function addFiles(
        string memory Cid,
        string memory Quality,
        string memory Accuracy
    ) public {
        FileStructureMapping[msg.sender].push(
            FileStructure(fileCount, Cid, Quality, Accuracy)
        );
        fileCount++;
        userMapping[msg.sender].totalNumberOfFiles =
            userMapping[msg.sender].totalNumberOfFiles +
            1;
    }

    //returning userDetails
    function getUserDetails()
        public
        view
        returns (
            string memory,
            uint256,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            uint256
        )
    {
        User memory user = userMapping[msg.sender];
        return (
            user.name,
            user.userId,
            user.name,
            user.email,
            user.profession,
            user.mobileNo,
            user.gender,
            user.totalNumberOfFiles
        );
    }

    //returning file details
    function getFileDetails(address _userAdd)
        public
        view
        returns (FileStructure[] memory)
    {
        return FileStructureMapping[_userAdd];
    }
}
