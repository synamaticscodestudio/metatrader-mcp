# DealerNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ DealerNext | [](imtconroute_dealertotal.md "DealerTotal") [](imtconroute_dealerget.md "DealerGet") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::DealerNext
Get a dealer entry in a routing rule by the index.
C++
MTAPIRES IMTConRoute::DealerNext( const UINT pos, // Position of a dealer entry IMTConRouteDealer* dealer // An object of a dealer entry ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRoute.DealerNext( uint pos, // Position of a dealer entry CIMTConRouteDealer dealer // An object of a dealer entry )  
---  
Python (Manager API)
MTConRoute.DealerNext( pos, # Position of a dealer entry dealer # An object of a dealer entry )  
---  
Parameters
pos
[in] Position of a dealer entry in the list, starting with 0.
dealer
[out] An object of a dealer entry. The dealer object must be first created using the [IMTAdminAPI::RouteDealerCreate](imtadminapi_routedealercreate.md "RouteDealerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.