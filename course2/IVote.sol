// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface IVote { // Note: modifiers are missing
    
    function creator() external view returns (address);
    function closed() external view returns (bool);
    function start() external view returns (uint);
    function end() external view returns (uint);
    function metadata() external view returns (string memory);

    function choices(uint256) external view returns (bytes32, uint256);
    function getChoicesCount() external view returns (uint);

    function voters(uint256) external view returns (address);
    function getVotersCount() external view returns (uint);
    
    function votes(address) external view returns (uint256, bool, uint256);
    function votesCount() external view returns (uint);
   
    function vote(uint) external;
    function cancel() external;

    event Voted(address indexed voter, uint choice);
    event Canceled();
    event Closed();
}
