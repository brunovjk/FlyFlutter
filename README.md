# FlyFlutter

FlyFlutter is a captivating gambling game carefully crafted to deliver an exhilarating experience to players who revel in the thrill of gambling. This innovative game showcases the utilization of FlyFlutter coins as native tokens for placing bets and earning payouts within the game. It's important to note that while these coins hold no real-world value, they serve as a testament to the developer's skill and expertise in creating captivating portfolio projects.

## How to Play

To place a bet in FlyFlutter, players must pay a bet cost of 0.01 MATIC and select a value for FlyFlutter coins ranging from 1 to 99. The 0.01 MATIC fee covers the expenses associated with ensuring the game's fairness and security, including the utilization of random number generators (RNG) and automation services.
The house operates without making any profits and solely holds FlyFlutter coins. At the beginning of the game, the house is provided with 10,000 FlyFlutter coins, and users have the option to donate or transfer additional FlyFlutter coins to the house. All betting transactions are securely recorded on an immutable blockchain ledger, ensuring transparency and accountability.

## Technologies Showcased

FlyFlutter serves as a showcase for a collection of simple yet powerful technologies. Developed by brunovjk, a proficient full-stack web developer, this game demonstrates the effective utilization of these technologies to create a seamless gambling experience.

## Development Environment Setup

Prerequisites

- Node.js
- Git

Clone the Repository

```bash
 git clone gitthub.com/brunovjk/FlyFlutter
```

## Front-End Development Environment Setup

To set up the front-end development environment, follow these steps:

1 - Navigate to the frontend directory:

```bash
  cd FlyFlutter/frontend
```

2 - Install dependencies:

```bash
  yarn
```

3 - Start the development server

```bash
  yarn run dev
```

4 - Visit http://localhost:3000 in your browser to play the game with FlyFlutter contracts.

## Smart Contract Development Environment Setup

To set up the smart contract development environment, follow these steps:

1 - Navigate to the contracts directory:

```bash
  cd FlyFlutter/contracts
```

2 - Install dependencies:

```bash
  yarn
```

3 - Change the contracts, scripts, and tests as desired.

4 - Compile the contracts:

```bash
  npx hardhat compile
```

5 - Run tests:

```bash
  npx hardhat test
```

6 - Deploy the contracts:

```bash
  npx hardhat run --network <network> deploy.js
```

## Smart Contracts Developed

The FlyFlutter project is powered by a set of four smart contracts that work together to provide a fair and transparent gambling experience for players.

    1 - The FlyFlutterCoin contract is responsible for managing the native token used in the game, FlyFlutter coins. It defines the FlyFlutter token and its associated functions, such as minting, transferring, and allowing tokens.

    2 - The House contract acts as the custodian of the FlyFlutter coins. It receives bets and donations from users and distributes payouts to the winning players. This ensures transparency and fairness in the betting process, as users can trust that their winnings will be paid out appropriately.

    3 - The OddAndEven contract is responsible for the game logic of the FlyFlutter game. It receives the bet amount, the user's choice of odd or even, and a random number generated by the QuantumRNG service to determine whether the user has won or lost the bet.

    4 - The Betting contract is responsible for facilitating the betting process for players. It receives MATIC and FlyFlutter coins from the player and ensures that the bet is valid. It interacts with the OddAndEven contract to determine the outcome of the game and calculates the payout based on the player's winning or losing bet. It also splits the MATIC payment to cover the costs of the QuantumRNG and Gelato Automation services.

Together, these contracts ensure a seamless and secure gambling experience for players, backed by the transparency and accountability provided by blockchain technology.

## Front-End Developed

The FlyFlutter front-end is built using Next.js and Material UI, with a focus on simplicity and ease of use for players. It interacts with the smart contracts on the back-end to provide a seamless gambling experience. Additionally, the front-end showcases other projects created by the developer.

## Contributing

Contributions are always welcome!

See `contributing.md` for how to get started.

Please follow the `code of conduct` for this project.

## Conclusion

FlyFlutter offers an engaging gambling experience that combines the excitement of gambling with the developer's passion for Odd and Even Hand games and Space. Join us in this thrilling journey and try your luck with FlyFlutter!
