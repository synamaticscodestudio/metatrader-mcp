# SymbolNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways") / [ IMTConGateway ](imtcongateway.md "IMTConGateway")/ SymbolNext | [](imtcongateway_symboltotal.md "SymbolTotal") [](imtcongateway_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTConGateway::SymbolNext
Get [a symbol](config_symbol.md "Symbols") from the list of symbols processed by the gateway by the index.
C++
LPCWSTR IMTConGateway::SymbolNext( const UINT pos // Position of the symbol ) const  
---  
.NET (Gateway/Manager API)
string CIMTConGateway.SymbolNext( uint pos // Position of the symbol )  
---  
Python (Manager API)
MTConGateway.SymbolNext( pos # Position of the symbol )  
---  
Parameters
pos
[in] Position of the symbol in the list, starting with 0.
Return Value
If successful, it returns a pointer to the path to the symbol at the specified position. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConGateway](imtcongateway.md "IMTConGateway") object.
To use the string after the object removal (call of the [IMTConGateway::Release](imtcongateway_release.md "Release") method of this object), a copy of it should be created.