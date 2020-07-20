/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { SocialRecoveryModule } from "./SocialRecoveryModule";

export class SocialRecoveryModuleFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<SocialRecoveryModule> {
    return super.deploy(overrides) as Promise<SocialRecoveryModule>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): SocialRecoveryModule {
    return super.attach(address) as SocialRecoveryModule;
  }
  connect(signer: Signer): SocialRecoveryModuleFactory {
    return super.connect(signer) as SocialRecoveryModuleFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SocialRecoveryModule {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SocialRecoveryModule;
  }
}

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "threshold",
    outputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_friends",
        type: "address[]"
      },
      {
        name: "_threshold",
        type: "uint256"
      }
    ],
    name: "setup",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address"
      }
    ],
    name: "isFriend",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "prevOwner",
        type: "address"
      },
      {
        name: "oldOwner",
        type: "address"
      },
      {
        name: "newOwner",
        type: "address"
      }
    ],
    name: "recoverAccess",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "dataHash",
        type: "bytes32"
      }
    ],
    name: "confirmTransaction",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: false,
    inputs: [
      {
        name: "_masterCopy",
        type: "address"
      }
    ],
    name: "changeMasterCopy",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "dataHash",
        type: "bytes32"
      }
    ],
    name: "isConfirmedByRequiredFriends",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "NAME",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "data",
        type: "bytes"
      }
    ],
    name: "getDataHash",
    outputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    payable: false,
    stateMutability: "pure",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      },
      {
        name: "",
        type: "address"
      }
    ],
    name: "isConfirmed",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "uint256"
      }
    ],
    name: "friends",
    outputs: [
      {
        name: "",
        type: "address"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "bytes32"
      }
    ],
    name: "isExecuted",
    outputs: [
      {
        name: "",
        type: "bool"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        name: "",
        type: "string"
      }
    ],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        name: "masterCopy",
        type: "address"
      }
    ],
    name: "ChangedMasterCopy",
    type: "event"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ecc806100206000396000f3fe608060405234801561001057600080fd5b5060043610610107576000357c0100000000000000000000000000000000000000000000000000000000900480639ca89d0d116100a9578063b79ffaff11610083578063b79ffaff146103e6578063ce14682814610412578063e52cb36a1461042f578063ffa1ad741461044c57610107565b80639ca89d0d146102a6578063a3f4df7e146102c3578063ae68b0561461034057610107565b806368125a1b116100e557806368125a1b146101f157806377231eaa1461022b57806379716e43146102635780637de7edef1461028057610107565b806342cde4e81461010c578063481c6a75146101265780634ab884271461014a575b600080fd5b610114610454565b60408051918252519081900360200190f35b61012e61045a565b60408051600160a060020a039092168252519081900360200190f35b6101ef6004803603604081101561016057600080fd5b81019060208101813564010000000081111561017b57600080fd5b82018360208201111561018d57600080fd5b803590602001918460208302840111640100000000831117156101af57600080fd5b9190808060200260200160405190810160405280939291908181526020018383602002808284376000920191909152509295505091359250610469915050565b005b6102176004803603602081101561020757600080fd5b5035600160a060020a0316610636565b604080519115158252519081900360200190f35b6101ef6004803603606081101561024157600080fd5b50600160a060020a03813581169160208101358216916040909101351661064b565b6101ef6004803603602081101561027957600080fd5b5035610966565b6101ef6004803603602081101561029657600080fd5b5035600160a060020a0316610a46565b610217600480360360208110156102bc57600080fd5b5035610b3d565b6102cb610bc8565b6040805160208082528351818301528351919283929083019185019080838360005b838110156103055781810151838201526020016102ed565b50505050905090810190601f1680156103325780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101146004803603602081101561035657600080fd5b81019060208101813564010000000081111561037157600080fd5b82018360208201111561038357600080fd5b803590602001918460018302840111640100000000831117156103a557600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610bff945050505050565b610217600480360360408110156103fc57600080fd5b5080359060200135600160a060020a0316610c0a565b61012e6004803603602081101561042857600080fd5b5035610c2a565b6102176004803603602081101561044557600080fd5b5035610c52565b6102cb610c67565b60025481565b600154600160a060020a031681565b81518111156104ac5760405160e560020a62461bcd028152600401808060200182810382526025815260200180610e0c6025913960400191505060405180910390fd5b6002811015610505576040805160e560020a62461bcd02815260206004820152601b60248201527f4174206c65617374203220667269656e64732072657175697265640000000000604482015290519081900360640190fd5b61050d610c9e565b60005b825181101561061b576000838281518110151561052957fe5b602090810290910101519050600160a060020a0381161515610595576040805160e560020a62461bcd02815260206004820152601f60248201527f496e76616c696420667269656e6420616464726573732070726f766964656400604482015290519081900360640190fd5b600160a060020a03811660009081526004602052604090205460ff16156105f05760405160e560020a62461bcd028152600401808060200182810382526021815260200180610deb6021913960400191505060405180910390fd5b600160a060020a03166000908152600460205260409020805460ff1916600190811790915501610510565b50815161062f906003906020850190610d20565b5060025550565b60046020526000908152604090205460ff1681565b3360009081526004602052604090205460ff16151561069e5760405160e560020a62461bcd028152600401808060200182810382526025815260200180610e316025913960400191505060405180910390fd5b60408051600160a060020a038086166024830152808516604483015283166064808301919091528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fe318b52b00000000000000000000000000000000000000000000000000000000179052600061072a82610bff565b60008181526005602052604090205490915060ff1615610794576040805160e560020a62461bcd02815260206004820152601960248201527f5265636f7665727920616c726561647920657865637574656400000000000000604482015290519081900360640190fd5b61079d81610b3d565b15156107dd5760405160e560020a62461bcd028152600401808060200182810382526025815260200180610e566025913960400191505060405180910390fd5b600081815260056020526040808220805460ff191660019081179091555490517f468721a7000000000000000000000000000000000000000000000000000000008152600160a060020a039091166004820181815260248301849052909263468721a7928492879183919060448101906064018360ff168152602001828103825284818151815260200191508051906020019080838360005b8381101561088e578181015183820152602001610876565b50505050905090810190601f1680156108bb5780820380516001836020036101000a031916815260200191505b5095505050505050602060405180830381600087803b1580156108dd57600080fd5b505af11580156108f1573d6000803e3d6000fd5b505050506040513d602081101561090757600080fd5b5051151561095f576040805160e560020a62461bcd02815260206004820152601a60248201527f436f756c64206e6f742065786563757465207265636f76657279000000000000604482015290519081900360640190fd5b5050505050565b3360009081526004602052604090205460ff1615156109b95760405160e560020a62461bcd028152600401808060200182810382526025815260200180610e316025913960400191505060405180910390fd5b60008181526005602052604090205460ff1615610a20576040805160e560020a62461bcd02815260206004820152601960248201527f5265636f7665727920616c726561647920657865637574656400000000000000604482015290519081900360640190fd5b60009081526006602090815260408083203384529091529020805460ff19166001179055565b600154600160a060020a03163314610a925760405160e560020a62461bcd028152600401808060200182810382526026815260200180610e7b6026913960400191505060405180910390fd5b600160a060020a0381161515610adc5760405160e560020a62461bcd028152600401808060200182810382526024815260200180610dc76024913960400191505060405180910390fd5b60008054600160a060020a03831673ffffffffffffffffffffffffffffffffffffffff19909116811790915560408051918252517f75e41bc35ff1bf14d81d1d2f649c0084a0f974f9289c803ec9898eeec4c8d0b89181900360200190a150565b600080805b600354811015610bbc5760008481526006602052604081206003805491929184908110610b6b57fe5b6000918252602080832090910154600160a060020a0316835282019290925260400190205460ff1615610b9f576001909101905b600254821415610bb457600192505050610bc3565b600101610b42565b5060009150505b919050565b60408051808201909152601681527f536f6369616c205265636f76657279204d6f64756c6500000000000000000000602082015281565b805160209091012090565b600660209081526000928352604080842090915290825290205460ff1681565b6003805482908110610c3857fe5b600091825260209091200154600160a060020a0316905081565b60056020526000908152604090205460ff1681565b60408051808201909152600581527f302e312e30000000000000000000000000000000000000000000000000000000602082015281565b600154600160a060020a031615610cff576040805160e560020a62461bcd02815260206004820152601c60248201527f4d616e616765722068617320616c7265616479206265656e2073657400000000604482015290519081900360640190fd5b6001805473ffffffffffffffffffffffffffffffffffffffff191633179055565b828054828255906000526020600020908101928215610d82579160200282015b82811115610d82578251825473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03909116178255602090920191600190910190610d40565b50610d8e929150610d92565b5090565b610dc391905b80821115610d8e57805473ffffffffffffffffffffffffffffffffffffffff19168155600101610d98565b9056fe496e76616c6964206d617374657220636f707920616464726573732070726f76696465644475706c696361746520667269656e6420616464726573732070726f76696465645468726573686f6c642063616e6e6f742065786365656420667269656e647320636f756e744d6574686f642063616e206f6e6c792062652063616c6c6564206279206120667269656e645265636f7665727920686173206e6f7420656e6f75676820636f6e6669726d6174696f6e734d6574686f642063616e206f6e6c792062652063616c6c65642066726f6d206d616e61676572a165627a7a723058203c7005b6babbb9f7952a810b60c909e295828d9a5c1627e16c6252bb32f9120d0029";