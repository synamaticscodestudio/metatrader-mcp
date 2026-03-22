# DealerGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRoute ](imtconroute.md "IMTConRoute")/ DealerGet | [](imtconroute_dealernext.md "DealerNext") [](imtconcondition.md "IMTConCondition") |
| --- | --- | --- |
| --- | --- |

IMTConRoute::DealerGet
Get a dealer entry in a routing rule by the login.
C++
MTAPIRES IMTConRoute::DealerGet( const UINT64 login, // Dealer's login IMTConRouteDealer* dealer // An object of a dealer entry ) const  
---  
.NET (Gateway/Manager API)
MTRetCoe CIMTConRoute.DealerGet( uint login, // Dealer's login CIMTConRouteDealer dealer // An object of a dealer entry )  
---  
Python (Manager API)
MTConRoute.DealerGet()  
---  
Parameters
login
[in] The login of a dealer.
dealer
[out] An object of a dealer entry. The dealer object must be first created using the [IMTAdminAPI::RouteDealerCreate](imtadminapi_routedealercreate.md "RouteDealerCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The [IMTConRouteDealer::Login()](imtconroutedealer_login.md "Login") value is used as the login.