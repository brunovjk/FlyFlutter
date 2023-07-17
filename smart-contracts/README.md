# Smart Contracts Developed

FlyFlutter project is powered by a set of four smart contracts that work together to provide a fair and transparent gambling experience for players.

## FlyFlutterCoin contract

Responsible for managing the native token used in the game. It defines the FlyFlutter token and its associated functions, such as minting, transferring, and allowing tokens.

## House contract

Acts as the custodian of the FlyFlutterCoins. It receives bets and donations from users and distributes payouts to the winning players. This ensures transparency and fairness in the betting process, as users can trust that their winnings will be paid out appropriately.

## OddAndEven contract

Responsible for the game logic of the FlutterFly game. It receives the user's hand, choice of odd or even and a random number to determine whether the user has won or lost the Odd and Even round.

## Betting contract

Responsible for facilitating the betting process for players. It receives MATIC and FlyFlutterCoin from the player and ensures that the bet is valid. It interacts with the OddAndEven contract to determine the outcome of the game and calculates the payout based on the player's winning or losing bet. It also splits the MATIC payment to cover the costs of the QuantumRNG and Gelato Automation services.

Together, these contracts ensure a seamless and secure gambling experience for players, backed by the transparency and accountability provided by blockchain technology.

# Environment Setup

To set up the smart contract development environment, follow these steps:

Install dependencies:

```
Yarn
```

Change the contracts, scripts, and tests as and if desired.

Compile the contracts:

```
npx hardhat compile
```

Run tests:

```
npx hardhat test
```

Deploy the contracts:

```
npx hardhat run --network <network> deploy.js
npx hardhat run --network polygonMumbai scripts/deploy_mumbai.ts
```
