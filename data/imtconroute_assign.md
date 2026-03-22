# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ Assign | [](imtconroute_release.md "Release") [](imtconroute_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConRoute::Assign( const IMTConRoute* config // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.Assign( CIMTConRoute config // Source object )  
---  
Parameters
config
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.