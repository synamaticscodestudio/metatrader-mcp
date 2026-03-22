# SymbolClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ SymbolClear | [](imtcongateway_symboldelete.md "SymbolDelete") [](imtcongateway_symboltotal.md "SymbolTotal") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::SymbolClear
Clear the list of [symbols](config_symbol.md "Symbols") processed by the gateway.
C++
MTAPIRES IMTConGateway::SymbolClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGateway.SymbolClear()  
---  
Python (Manager API)
MTConGateway.SymbolClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of symbols of a data feed.