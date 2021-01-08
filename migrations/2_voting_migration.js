//const AccessControlled = artifacts.require("AccessControlled");
const Voting = artifacts.require("Voting");

module.exports = function(deployer) {
  //deployer.deploy(AccessControlled);
  //deployer.link(AccessControlled, Voting);
  deployer.deploy(Voting);
};