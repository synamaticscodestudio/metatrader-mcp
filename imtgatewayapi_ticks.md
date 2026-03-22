# Tick Data (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Tick Data | [](imtgatewayapi_chartreplace.md "ChartReplace") [](imtgatewayapi_tickhistoryrequest.md "TickHistoryRequest") |
| --- | --- | --- |
| --- | --- |

Tick Data Functions
The MetaTrader 5 Gateway API features functions for the export and import of tick data to the platform. Unlike [SendTicks*](imtgatewayapi_sendticks.md "SendTicks"), these functions work directly with the history of ticks, rather than the price stream which is broadcast to clients in real time.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [TickHistoryRequest](imtgatewayapi_tickhistoryrequest.md "TickHistoryRequest") | Get quotes for a symbol in the specified time range. |
| [TickHistoryRequestRaw](imtgatewayapi_tickhistoryrequestraw.md "TickHistoryRequestRaw") | Get the entire stream of quotes for a symbol (raw and processed prices in accordance with the configuration of the symbol) in the specified time range. |
| [TickHistoryAdd](imtgatewayapi_tickhistoryadd.md "TickHistoryAdd") | Add tick data of a symbol. |
| [TickHistoryReplace](imtgatewayapi_tickhistoryreplace.md "TickHistoryReplace") | Completely replace tick data in the specified period by the transmitted data |