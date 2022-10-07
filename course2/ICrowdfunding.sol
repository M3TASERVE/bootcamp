// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

interface ICrowdfunding {

    function creator() external view returns (address);
    function start() external view returns (uint);
    function end() external view returns (uint);
    function closed() external view returns (bool);

    function cap() external view returns (uint);
    function token() external view returns (address);
    function depositsOf(address participant) external view returns (uint256);
    function amountRaised() external view returns (uint256);

    function participate(uint256 amount) external;
    function close() external;
    function cancel() external;
    function withdraw() external;

    event Deposited(address indexed participant, uint256 amount);
    event Withdrawn(address indexed participant, uint256 amount);
    event Canceled();
    event Closed();
}
