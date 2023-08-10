module.exports = {
  target: 6000,
  currentAmount: 0,
  numberOfDonations: 0,
  currency: 'USD',
  currencySymbol: '$',
  wallets: {
    defi: {
      tokenName: 'USDC (ERC-20)',
      address: '0xf09e264eA083488f168f4312B39D0A0EF437645D'
    },
    bank: {
      currency: 'USD',
      name: "Zenith Bank (Ghana)",
      accountName: "AFROMETA LIMITED COMPANY",
      accountNumber: "6040169036",
      swiftCode: "ZEBLGHAC",
      sortCode: "120101"
    }
  }
}
