# CryptoZombies
AdvancedCryptoZombiesModule1
creating separate test files for each contract and giving it the name of that smart contract is the best way to test the contracts.
artifacts.require functiongenerates the JSON file of the code which the machine can understand(bytecode).
it() function and "async" and "await" are the promises of javascript used in this code.
test using artifacts.require,  result.logs[0].args.name, set of assertion functions such as equal() and deepEqual(), assert.equal() for comparing simple value.
On calling contract.new, Truffle deploy new contract.
In the terminal run command "truffle test" for testing the contract. if everything is working perfectly it will complete test , otherwise it'll throw an error.
"await time.increase(time.duration.days(1))" will work as a time machine and you don't have to wait for a day/24 hrs for testing, but it is not available on the main Ethereum network because if it would be available, it would be a disaster.
Chai is one of the best assertion module, for installation of "Chai" run command "npm -g install chai" and then export it by using the line "var expect = require('chai').expect" in your code.
run "npm i @truffle/hdwallet-provider" command for provider wherever a Web3 provider is needed, not just in Truffle.
