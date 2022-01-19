export const THE_GRAPH_URL = "https://api.studio.thegraph.com/query/15446/cerberusdao/v7.0.0";
export const EPOCH_INTERVAL = 2200;

// NOTE could get this from an outside source since it changes slightly over time
export const BLOCK_RATE_SECONDS = 13.14;

export const TOKEN_DECIMALS = 9;

interface IAddresses {
  [key: number]: { [key: string]: string };
}

export const addresses: IAddresses = {
  4: {
    DAI_ADDRESS: "0xfACDF811DD0ECB621Fe35d5883e0F10A5Bc7711E",
    OHM_ADDRESS: "0x6aD1EAcA116236E42F8D8bd2b9245Fce48eA338C",
    STAKING_ADDRESS: "0x31847Eb74ce61d121258897977EB0b40098b4d07",
    STAKING_HELPER_ADDRESS: "0x053D27aF4CEA62f5d6a29138044D40f2Af4A2484",
    SOHM_ADDRESS: "0x8384E4e55846f01e9E7B5609A2476d6C736bBb3a",
    DISTRIBUTOR_ADDRESS: "0x0093ABCd56A17E45c2F51Bb379df8a5Fea9f0e54",
    BONDINGCALC_ADDRESS: "0xF7cBcF38B2933D1DE914721Ccb5de65Ad08DA77b",
    TREASURY_ADDRESS: "0x9eE8F42f770FBB1108b2382270a1f15950B7e25a",
    REDEEM_HELPER_ADDRESS: "0x5bB577Dcf6D33B6604c752bCAbCc8111e8A1A4A6",
  },
  1: {
    DAI_ADDRESS: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    OHM_ADDRESS: "0x8a14897eA5F668f36671678593fAe44Ae23B39FB",
    STAKING_ADDRESS: "0x95deaF8dd30380acd6CC5E4E90e5EEf94d258854",
    STAKING_HELPER_ADDRESS: "0xDda2ebc7D12418d8e002153d71a593D4EeF64E25",
    SOHM_ADDRESS: "0xA552f061d8962BE4c1f6BC6B0403Ca620F569330",
    DISTRIBUTOR_ADDRESS: "0x3878dB57d6E1c15A3670d32ED15d3853Bd5C6fde",
    BONDINGCALC_ADDRESS: "0xf558b05583e7306f93a199c6699bdf0EC714763A",
    SPECIALBONDINGCALC_ADDRESS: "0x29d6f2fF916f7847Ba5c086BaEef36A09187f5C9",
    TREASURY_ADDRESS: "0x56D595ea5591D264bc1Ef9E073aF66685F0bFD31",
  },
  // 1: {
  //   DAI_ADDRESS: "0x6b175474e89094c44da98b954eedeac495271d0f", // duplicate
  //   OHM_ADDRESS: "0x383518188c0c6d7730d91b2c03a03c837814a899",
  //   STAKING_ADDRESS: "0xfd31c7d00ca47653c6ce64af53c1571f9c36566a", // The new staking contract
  //   STAKING_HELPER_ADDRESS: "0xc8c436271f9a6f10a5b80c8b8ed7d0e8f37a612d", // Helper contract used for Staking only
  //   OLD_STAKING_ADDRESS: "0x0822F3C03dcc24d200AFF33493Dc08d0e1f274A2",
  //   SOHM_ADDRESS: "0x04F2694C8fcee23e8Fd0dfEA1d4f5Bb8c352111F",
  //   OLD_SOHM_ADDRESS: "0x31932E6e45012476ba3A3A4953cbA62AeE77Fbbe",
  //   PRESALE_ADDRESS: "0xcBb60264fe0AC96B0EFa0145A9709A825afa17D8",
  //   AOHM_ADDRESS: "0x24ecfd535675f36ba1ab9c5d39b50dc097b0792e",
  //   MIGRATE_ADDRESS: "0xC7f56EC779cB9e60afA116d73F3708761197dB3d",
  //   DISTRIBUTOR_ADDRESS: "0xbe731507810C8747C3E01E62c676b1cA6F93242f",
  //   BONDINGCALC_ADDRESS: "0xcaaa6a2d4b26067a391e7b7d65c16bb2d5fa571a",
  //   CIRCULATING_SUPPLY_ADDRESS: "0x0efff9199aa1ac3c3e34e957567c1be8bf295034",
  //   TREASURY_ADDRESS: "0x31f8cc382c9898b273eff4e0b7626a6987c846e8",
  //   CRUCIBLE_OHM_LUSD: "0x2230ad29920D61A535759678191094b74271f373",
  //   LQTY: "0x6dea81c8171d0ba574754ef6f8b412f2ed88c54d",
  //   MIST: "0x88acdd2a6425c3faae4bc9650fd7e27e0bebb7ab",
  //   REDEEM_HELPER_ADDRESS: "0xE1e83825613DE12E8F0502Da939523558f0B819E",
  //   FUSE_6_SOHM: "0x59bd6774c22486d9f4fab2d448dce4f892a9ae25", // Tetranode's Locker
  //   FUSE_18_SOHM: "0x6eDa4b59BaC787933A4A21b65672539ceF6ec97b", // Olympus Pool Party
  //   PT_TOKEN_ADDRESS: "0x0E930b8610229D74Da0A174626138Deb732cE6e9", // 33T token address, taken from `ticket` function on PRIZE_STRATEGY_ADDRESS
  //   PT_PRIZE_POOL_ADDRESS: "0xEaB695A8F5a44f583003A8bC97d677880D528248", // NEW
  //   PT_PRIZE_STRATEGY_ADDRESS: "0xf3d253257167c935f8C62A02AEaeBB24c9c5012a", // NEW
  // },
};
