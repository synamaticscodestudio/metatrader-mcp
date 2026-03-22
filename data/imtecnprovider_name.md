# Name (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProvider ](imtecnprovider.md "IMTECNProvider")/ Name | [](imtecnprovider_providerid.md "ProviderID") [](imtecnprovider_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTECNProvider::Name
Get the name of the provider through which the order is forwarded to the external system.
C++
LPCWSTR IMTECNProvider::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTECNProvider.Name()  
---  
Return Value
Provider name.
Note
A gateway or MetaTrader 5 cluster is used as a provider.
A pointer to the resulting string is valid for the [IMTECNProvider](imtecnprovider.md "IMTECNProvider") object lifetime.
To use the string after object deletion (by a call of the [IMTECNProvider::Release](imtecnprovider_release.md "Release") method of this object), a copy of it should be created.