# TickHistoryAdd (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Tick Data ](imtgatewayapi_ticks.md "Tick Data")/ TickHistoryAdd | [](imtgatewayapi_tickhistoryrequestraw.md "TickHistoryRequestRaw") [](imtgatewayapi_tickhistoryreplace.md "TickHistoryReplace") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::TickHistoryAdd
Add tick data of a symbol.
C++
MTAPIRES IMTGatewayAPI::TickHistoryAdd( LPCWSTR symbol, // Symbol const MTTickRate*  ticks, // Ticks to add const UINT ticks_total // Number of ticks to add )  
---  
.NET
MTRetCode CIMTGatewayAPI.TickHistoryAdd( string symbol, // Symbol MTTickRate[]  ticks // Ticks to add )  
---  
Parameters
symbol
[in] The symbol, for which you want to update tick data.
ticks
[in] Array of [MTTickRate](mttickrate.md "MTTickRate") structures, which describe the ticks being added.
ticks_total
[in] The number of ticks to add.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Unlike [IMTGatewayAPI::SendTicks](imtgatewayapi_sendticks.md "SendTicks"), this method directly adds quotes to the price history rather than adding them to the price stream.