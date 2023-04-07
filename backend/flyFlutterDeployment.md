/*** Example *********************************************/
house = deploy House contract
ffc = deploy FlyFlutterCoin contract (house.address)
oddAndEven = deploy OddAndEven library
betting = deploy Bettingcontract (
	uint256 _betFee,
        uint256 _qrngFee,
        address _airnodeRrp,
        address payable _automate,
        address _flyFlutterCoinContract,
        address _fundsOwner,
        address _houseContract,
        address _oddsAndEvenContract
	)

house.setBettingContract(betting.address) return bool
house.setFlyFlutterCoin(ffc.address) return bool
house.approveBettingContract() return bool

ffc.setBettingContract(betting.address) return bool

/*** Mumbai  *********************************************/
house = deploy House contract
0x71488f778e435c6C780818A32B23Aad8F033c9a5
verify house

ffc = deploy FlyFlutterCoin contract (house.address)
0x8520020D2161d9f02eA951440312739E0D53C21c
verify ffc

oddAndEven = deploy OddAndEven library
0x0b117405ACEFB03446A564F0C636ba2f0954Cc6a
verify oddAndEven

betting = deploy Bettingcontract (
	uint256 _betFee,
10000000000000000
        uint256 _qrngFee,
5000000000000000
        address _airnodeRrp,
0xa0AD79D995DdeeB18a14eAef56A549A04e3Aa1Bd
        address payable _automate,
0xB3f5503f93d5Ef84b06993a1975B9D21B962892F
        address _flyFlutterCoinContract,
0x8520020D2161d9f02eA951440312739E0D53C21c
        address _fundsOwner,
0x6E6451a8C9FcfA179C43eb40CcCd78bbC1262E28
        address _houseContract,
0x71488f778e435c6C780818A32B23Aad8F033c9a5
        address _oddsAndEvenContract
0x0b117405ACEFB03446A564F0C636ba2f0954Cc6a
	)
0x09Cd05CD1AC01F7E4dbc08Dfc2758bb4c9958057
verify betting

house.setBettingContract(betting.address) return bool
house.setFlyFlutterCoin(ffc.address) return bool
ffc.setBettingContract(betting.address) return bool
house.approveBettingContract() return bool

npx @api3/airnode-admin derive-sponsor-wallet-address \
  --airnode-xpub xpub6CuDdF9zdWTRuGybJPuZUGnU4suZowMmgu15bjFZT2o6PUtk4Lo78KGJUGBobz3pPKRaN9sLxzj21CMe6StP3zUsd8tWEJPgZBesYBMY7Wo \
  --airnode-address 0x6238772544f029ecaBfDED4300f13A3c4FE84E1D \
  --sponsor-address 0x09Cd05CD1AC01F7E4dbc08Dfc2758bb4c9958057 // betting.address
Sponsor wallet address: 0x2a6187abDc6A9eA2AAa8130d27a3a7bF39FCce7b //<output>

betting.setRequestParameters(
        address _airnode,
0x6238772544f029ecaBfDED4300f13A3c4FE84E1D
        bytes32 _endpointIdUint256,
0xfb6d017bb87991b7495f563db3c8cf59ff87b09781947bb1e417006ad7f55a78
        address _sponsorWallet
0x2a6187abDc6A9eA2AAa8130d27a3a7bF39FCce7b
	)

//
mint
approve bettingContract
placeBet // 10000000000000000

