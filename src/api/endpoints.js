import { apiVersion } from "./axios-config";

export default  {
    auth: `${apiVersion}/auth`,
    users: `${apiVersion}/users`,
    
    payments: `${apiVersion}/payments`,
    transactions: `${apiVersion}/transactions`,
    
    productServices: `${apiVersion}/product-services`,
    serviceProviders: `${apiVersion}/service-providers`,
    bonuses: `${apiVersion}/bonuses`,
    ranks: `${apiVersion}/ranks`,
    incentives: `${apiVersion}/incentives`,
    incentiveClaims: `${apiVersion}/incentive-claims`,
    productClaims: `${apiVersion}/product-claims`,
    settings: `${apiVersion}/settings`,
    packages: `${apiVersion}/packages`,
    products: `${apiVersion}/products`,
    withdrawals: `${apiVersion}/withdrawals`,
    productPurchases: `${apiVersion}/product-purchases`,
    stockists: `${apiVersion}/stockists`,
    stockistPackage: `${apiVersion}/stockist-packages`,
    banks: `${apiVersion}/banks`
};