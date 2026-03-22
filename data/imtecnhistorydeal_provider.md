# Provider (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNHistoryDeal ](imtecnhistorydeal.md "IMTECNFilling")/ Provider | [](imtecnhistorydeal_commission.md "Commission") [](imtecnhistorydealarray.md "IMTECNMatchingArray") |
| --- | --- | --- |
| --- | --- |

IMTECNHistoryDeal::Provider
Get the identifier of the provider through which the deal was executed.
C++
UINT64 IMTECNHistoryDeal::Provider() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNHistoryDeal.Provider()  
---  
Return Value
The identifier of the provider through which the deal was executed.
Note
The value corresponds to [IMTECNProvider::ProviderID](imtecnprovider_providerid.md "ProviderID").
A gateway or MetaTrader 5 cluster is used as a provider.
IMTECNHistoryDeal::Provider
Set the identifier of the provider through which the deal was executed.
C++
MTAPIRES IMTECNHistoryDeal::Provider( const UINT64 provider_id // provider )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNHistoryDeal.Provider( ulong provider_id // provider )  
---  
Parameters
provider_id
[in] The identifier of the provider through which the deal was executed.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The value corresponds to [IMTECNProvider::ProviderID](imtecnprovider_providerid.md "ProviderID").
A gateway or MetaTrader 5 cluster is used as a provider.