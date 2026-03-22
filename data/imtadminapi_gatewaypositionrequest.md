# GatewayPositionRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Gateways ](imtadminapi_config_gateway.md "Functions")/ GatewayPositionRequest | [](imtadminapi_gatewaymodulenext.md "GatewayModuleNext") [](imtadminapi_config_route.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GatewayPositionRequest
Request the current state of positions from the trading accounts used by the gateway in an external system. Depending on the gateway tab, positions can be displayed via one or several accounts.
C++
MTAPIRES IMTAdminAPI::GatewayPositionRequest( UINT64 gateway_id, // Gateway ID IMTPositionArray* positions, // Positions array INT64& positions_time // Position state fixing time )  
---  
.NET
MTRetCode CIMTAdminAPI.GatewayPositionRequest( ulong gateway_id, // Gateway ID CIMTPositionArray positions, // Positions array out long positions_time // Position state fixing time )  
---  
Python
AdminAPI.GatewayPositionRequest( gateway_id # Gateway ID )  
---  
Parameters
gateway_id
[in] Gateway ID ([IMTConGateway::ID](imtcongateway_id.md "ID")), for which positions status should be requested in an external trading system.
positions
[out] An object of positions array. Positions object must be first created using [IMTAdminAPI::PositionCreateArray](imtadminapi_positioncreatearray.md "PositionCreateArray").
positions_time
[out] Positions state fixing time, specified in seconds that have elapsed since 01.01.1970. Depending on the gateway (and external trading system), states of positions can be submitted either in real time mode or only at the end of a trading session.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Positions requests should be supported by the gateway.
This method cannot be called from event handlers (any methods of IMT*Sink classes).