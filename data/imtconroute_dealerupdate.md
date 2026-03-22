# DealerUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ DealerUpdate | [](imtconroute_dealeradd.md "DealerAdd") [](imtconroute_dealerdelete.md "DealerDelete") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::DealerUpdate
Update a dealer to whom requests under the conditions of this rule will be sent for processing.
C++
MTAPIRES IMTConRoute::DealerUpdate( const UINT pos, // Position of a dealer entry const IMTConRouteDealer* dealer // An object of a dealer entry )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.DealerUpdate( uint pos, // Position of a dealer entry CIMTConRouteDealer dealer // An object of a dealer entry )  
---  
Python (Manager API)
MTConRoute.DealerUpdate( pos, # Position of a dealer entry dealer # An object of a dealer entry )  
---  
Parameters
pos
[in] Position of a dealer entry in the list, starting with 0.
dealer
[in] An object of a dealer entry.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.