# ProviderID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProvider ](imtecnprovider.md "IMTECNProvider")/ ProviderID | [](imtecnprovider_id.md "ID") [](imtecnprovider_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTECNProvider::ProviderID
Get the ID of the provider through which the order is forwarded to the external system.
C++
UINT64 IMTECNProvider::ProviderID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTECNProvider.ProviderID()  
---  
Return Value
Provider ID.
Note
A gateway or MetaTrader 5 cluster is used as a provider.