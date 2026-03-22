# SymbolAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ SymbolAdd | [](imtcongateway_parameterget.md "ParameterGet") [](imtcongateway_symbolupdate.md "SymbolUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::SymbolAdd
Add [a symbol](config_symbol.md "Symbols"), for which the gateway will transmit quotes and process trade operations.
C++
MTAPIRES IMTConGateway::SymbolAdd( LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.SymbolAdd( srting path // Path to the symbol )  
---  
Python (Manager API)
MTConGateway.SymbolAdd( path # Path to the symbol )  
---  
Parameters
path
[in] Path to a symbol or group of symbols in accordance with the hierarchy of symbols in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
[IMTConSymbol::Path](imtconsymbol_path.md "Path") value is used as the path to the symbol.