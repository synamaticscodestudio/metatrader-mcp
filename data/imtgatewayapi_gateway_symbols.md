# Gateway Symbols (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Gateway Symbols | [](imtgatewayapi_requestgetall.md "RequestGetAll") [](imtgatewayapi_gatewaysymboladd.md "GatewaySymbolAdd") |
| --- | --- | --- |
| --- | --- |

Gateway trading symbols
The functions described in this section pass to the MetaTrader 5 cluster the data about the parameters of trading symbols available to the gateway. This information (symbols) is passed only to the history server and is used only for internal purposes when [matching ECN orders through the gateway](https://support.metaquotes.net/en/docs/mt5/platform/administration/ecn/ecn_matching). Symbols created in this way are not available to clients.
ECN works with one set of symbols, to which data from different gateways are received. One set of settings is used for all symbols. For example, ECN has the EURUSD.ECN symbol, which receives data from three different gateways:
  * EURUSD.GW1
  * EURUSD.GW2
  * EURUSD.GW3

Each of these symbols has its own settings on the corresponding external system side, where these settings may differ. For example, the symbols may have different accuracy, contract size, etc. Several gateways cannot simultaneously import their settings into one symbol configuration on the trading platform side (using the [IMTGateway::Symbol*](imtgatewayapi_config_symbol.md "Functions") methods).
To solve this situation, a separate option has been added to the Gateway API allowing the specification of symbol settings on the external system side. These settings are not imported to trade servers. They are only used in ECN to unify symbol settings from different systems.
[Translation settings](imtcongatewaytranslate.md "IMTConGatewayTranslate") are applied to the list of symbols available to the gateway. For example, if the symbol name conversion EURUSD.GW1 -> EURUSD.ECN is specified in the gateway configuration, the settings of EURUSD.ECN will be transferred to the ECN.
If the gateway does not pass the list of its symbols, the ECN will be able to receive Market Depth data and quotes from that gateway and collect them in an aggregated Market Depth, but will not be able to implement matching with the gateway orders. That is, all gateway levels in the Market Depth will be considered illiquid.  
---  
The following functions are provided for managing the gateway symbols:
| The function | Purpose |
| --- | --- |
| --- | --- |
| [GatewaySymbolAdd](imtgatewayapi_gatewaysymboladd.md "GatewaySymbolAdd") | Adds a new symbol to the list of symbols available to the gateway. |
| [GatewaySymbolDelete](imtgatewayapi_gatewaysymboldelete.md "GatewaySymbolDelete") | Deletes a symbol from the list available to the gateway (by name). |
| [GatewaySymbolClear](imtgatewayapi_gatewaysymbolclear.md "GatewaySymbolClear") | Clears the entire list of symbols available to the gateway. |
| [GatewaySymbolTotal](imtgatewayapi_gatewaysymboltotal.md "GatewaySymbolTotal") | Gets the total number of symbols available to the gateway. |
| [GatewaySymbolNext](imtgatewayapi_gatewaysymbolnext.md "GatewaySymbolNext") | Gets the description of a symbol available to the gateway, by index. |
| [GatewaySymbolGet](imtgatewayapi_gatewaysymbolget.md "GatewaySymbolGet") | Gets the description of a symbol available to the gateway, by name. |