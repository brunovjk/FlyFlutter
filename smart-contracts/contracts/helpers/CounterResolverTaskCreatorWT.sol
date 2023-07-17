// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

import "./AutomateTaskCreator.sol";

/**
 * @dev
 * Example contract that creates a resolver task.
 */
// solhint-disable not-rely-on-time
// solhint-disable no-empty-blocks
contract CounterResolverTaskCreatorWT is AutomateTaskCreator {
    struct Task {
        string taskAccomplished;
        bytes32 requestId;
        bytes32 taskId;
        bool waitingPerformTask;
    }

    mapping(bytes32 => Task) public taks;
    mapping(address => bytes32[]) public taksIdPerAddress;

    event CounterTaskCreated(bytes32 taskId);

    constructor(
        address payable _automate,
        address _fundsOwner
    ) AutomateTaskCreator(_automate, _fundsOwner) {}

    receive() external payable {}

    function createTask() external payable {
        require(msg.value == 0.1 ether, "wrong msg.value");
        bytes32 requestId = keccak256(abi.encodePacked(block.timestamp));
        
        ModuleData memory moduleData = ModuleData({
            modules: new Module[](2),
            args: new bytes[](2)
        });

        moduleData.modules[0] = Module.RESOLVER;
        moduleData.modules[1] = Module.PROXY;

        moduleData.args[0] = _resolverModuleArg(
            address(this),
            abi.encodeCall(this.checker, (requestId))
        );
        moduleData.args[1] = _proxyModuleArg();

        bytes32 id = _createTask(
            address(this),
            abi.encode(this.perfomTask.selector),
            moduleData,
            ETH
        );

        Task memory newTask = Task({
            taskAccomplished: "started task",
            requestId: requestId,
            taskId: id,
            waitingPerformTask: false
        });
        taks[requestId] = newTask;
        taksIdPerAddress[msg.sender].push(requestId);
        emit CounterTaskCreated(id);
    }

    function testPerfomTask(bytes32 requestId) external {
        taks[requestId].waitingPerformTask = true;
    }

    function perfomTask(bytes32 requestId) external onlyDedicatedMsgSender {
        if (taks[requestId].waitingPerformTask) {
            taks[requestId].taskAccomplished = "task completed successfully";
            taks[requestId].waitingPerformTask = false;
            _cancelTask(taks[requestId].taskId);
        }

        (uint256 fee, address feeToken) = _getFeeDetails();

        _transfer(fee, feeToken);
    }

    function checker(
        bytes32 requestId
    ) external view returns (bool canExec, bytes memory execPayload) {
        canExec = taks[requestId].waitingPerformTask;

        execPayload = abi.encodeCall(this.perfomTask, (requestId));
    }
}
