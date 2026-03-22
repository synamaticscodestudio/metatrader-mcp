# Version (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ ECN ](reference_ecn.md "The ECN") / [ IMTECNProvider ](imtecnprovider.md "IMTECNProvider")/ Version | [](imtecnprovider_module.md "Module") [](imtecnproviderarray.md "IMTECNProviderArray") |
| --- | --- | --- |
| --- | --- |

IMTECNProvider::Version
Get the version of the gateway through which the order is forwarded to the external system.
C++
UINT IMTECNProvider::Version() const  
---  
.NET (Gateway/Manager API)
uint CIMTECNProvider.Version()  
---  
Return Value
Gateway module version.
Note
The [IMTConGatewayModule::Version](imtcongatewaymodule_version.md "Version") value is used for the version.