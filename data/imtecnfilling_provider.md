# Provider (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNFilling ](imtecnfilling.md "IMTECNFilling")/ Provider | [](imtecnfilling_deviation.md "Deviation") [](imtecnfilling_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTECNFilling::Provider
Get the ID of the provider through which the order is forwarded to the external system.
C++
UINT64 IMTECNFilling::Provider() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNFilling.Provider()  
---  
Return Value
The identifier of the provider through which the order is forwarded to the external system.
Note
The value corresponds to [IMTECNProvider::ProviderID](imtecnprovider_providerid.md "ProviderID").
A gateway or MetaTrader 5 cluster is used as a provider.
IMTECNFilling::Provider
Set the identifier of the provider through which the order is forwarded to the external system.
C++
MTAPIRES IMTECNFilling::Provider( const UINT64 provider_id // provider )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTECNFilling.Provider( ulong provider_id // provider )  
---  
Parameters
provider_id
[in] The identifier of the provider through which the order is forwarded to the external system.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The value corresponds to [IMTECNProvider::ProviderID](imtecnprovider_providerid.md "ProviderID").
A gateway or MetaTrader 5 cluster is used as a provider.