# Module (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProvider ](imtecnprovider.md "IMTECNProvider")/ Module | [](imtecnprovider_name.md "Name") [](imtecnprovider_version.md "Version") |
| --- | --- | --- |
| --- | --- |

IMTECNProvider::Module
Get the name of the gateway through which the order is forwarded to the external system.
C++
LPCWSTR IMTECNProvider::Module() const  
---  
.NET (Gateway/Manager API)
string CIMTECNProvider.Module()  
---  
Return Value
Gateway module name.
Note
The [IMTConGateway::Module](imtcongateway_module.md "Module") value is used as the name.
A pointer to the resulting string is valid for the [IMTECNProvider](imtecnprovider.md "IMTECNProvider") object lifetime.
To use the string after object deletion (by a call of the [IMTECNProvider::Release](imtecnprovider_release.md "Release") method of this object), a copy of it should be created.