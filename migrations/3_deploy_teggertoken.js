var TeggerToken = artifacts.require('TeggerToken')

module.exports = function(deployer) {
  /* teggerTokenStub = new TeggerToken(process.env.ACCOUNT_PUBLIC_KEY) */
  deployer.deploy(TeggerToken)
}