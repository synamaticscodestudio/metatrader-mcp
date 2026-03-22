# DealerAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ DealerAdd | [](imtconroute_conditionnext.md "ConditionNext") [](imtconroute_dealerupdate.md "DealerUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::DealerAdd
Add a dealer to whom requests under the conditions of this rule will be sent for processing.
C++
MTAPIRES IMTConRoute::DealerAdd( IMTConRouteDealer* dealer // An object of a dealer entry )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.DealerAdd( CIMTConRouteDealer dealer // An object of a dealer entry )  
---  
Python (Manager API)
MTConRoute.DealerAdd( dealer # An object of a dealer entry )  
---  
Parameters
dealer
[in] An object of a dealer entry.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.