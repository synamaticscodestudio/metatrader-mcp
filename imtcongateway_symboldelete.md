# SymbolDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ SymbolDelete | [](imtcongateway_symbolshift.md "SymbolShift") [](imtcongateway_symbolclear.md "SymbolClear") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::SymbolDelete
Delete [a symbol](config_symbol.md "Symbols") from the list of symbols processed by the gateway by the index.
C++
MTAPIRES IMTConGateway::SymbolDelete( const UINT pos // Position of the symbol )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.SymbolDelete( uint  pos // Position of the symbol )  
---  
Python (Manager API)
MTConGateway.SymbolDelete( pos # Position of the symbol )  
---  
Parameters
pos
[in] Position of the symbol, starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.