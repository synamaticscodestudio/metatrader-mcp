# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteDealer ](imtconroutedealer.md "IMTConRouteDealer")/ Assign | [](imtconroutedealer_release.md "Release") [](imtconroutedealer_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConRouteDealer::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConRouteDealer::Assign( const IMTConRouteDealer* config // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRouteDealer.Assign( CIMTConRouteDealer config // Source object )  
---  
Parameters
config
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.