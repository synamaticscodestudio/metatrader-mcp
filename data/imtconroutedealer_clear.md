# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteDealer ](imtconroutedealer.md "IMTConRouteDealer")/ Clear | [](imtconroutedealer_assign.md "Assign") [](imtconroutedealer_login.md "Login") |
| --- | --- | --- |
| --- | --- |

IMTConRouteDealer::Clear
Clear an object.
C++
MTAPIRES IMTConRouteDealer::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRouteDealer.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.