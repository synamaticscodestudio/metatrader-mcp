# SymbolUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ SymbolUpdate | [](imtcongateway_symboladd.md "SymbolAdd") [](imtcongateway_symbolshift.md "SymbolShift") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::SymbolUpdate
Change [the symbol](config_symbol.md "Symbols") with the specified index, for which the gateway transmits quotes and processes trade operations.
C++
MTAPIRES IMTConGateway::SymbolUpdate( const UINT pos, // Position of the symbol LPCWSTR path // Path to the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.SymbolUpdate( uint pos, // Position of the symbol string path // Path to the symbol )  
---  
Python (Manager API)
MTConGateway.SymbolUpdate( pos, # Position of the symbol path # Path to the symbol )  
---  
Parameters
pos
[in] Position of the symbol.
path
[in] Path to a symbol or group of symbols in accordance with the hierarchy of symbols in the trading platform.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
[IMTConSymbol::Path](imtconsymbol_path.md "Path") value is used as the path to the symbol.