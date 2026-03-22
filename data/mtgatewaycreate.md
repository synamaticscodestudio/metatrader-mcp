# MTGatewayCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Exported Functions ](gatewayapi_exported.md "Exported Functions")/ MTGatewayCreate | [](mtgatewayversion.md "MTGatewayVersion") [](mtgatewaycreatelocal.md "MTGatewayCreateLocal") |
| --- | --- | --- |
| --- | --- |

MTGatewayCreate
MTGatewayCreate exported function creates a new [IMTGatewayAPI](imtgatewayapi.md "Main Interface") interface copy and returns a pointer to it.
MTAPIRES MTGatewayCreate( MTGatewayInfo& info // Reference to MTGatewayInfo IMTGatewayAPI** gateway // Pointer to a pointer o the interface )  
---  
Parameters
info
[out] A reference to the [MTGatewayInfo](mtgatewayinfo.md "MTGatewayInfo") structure.
gateway
[out] A pointer to a pointer to the created [IMTGatewayAPI](imtgatewayapi.md "Main Interface") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.