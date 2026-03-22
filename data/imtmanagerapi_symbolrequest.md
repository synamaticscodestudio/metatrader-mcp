# SymbolRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolRequest | [](imtmanagerapi_symbolget.md "SymbolGet") [](imtmanagerapi_symbolrequestarray.md "SymbolRequestArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolRequest
Request a symbol configuration from a server by the name.
C++
MTAPIRES IMTManagerAPI::SymbolRequest( LPCWSTR name, // Symbol name IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolRequest( string name, // Symbol name CIMTConSymbol obj // An object of the symbol configuration )  
---  
Python
ManagerAPI.SymbolRequest( name # Symbol name )  
---  
Parameters
name
[in] Symbol name.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTManagerAPI::SymbolCreate](imtmanagerapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the name. This method returns a symbol configuration with default trade settings.
This method cannot be called from event handlers (any methods of IMT*Sink classes).
IMTManagerAPI::SymbolRequest
Request from a server an individual configuration of a symbol for a group by the name of the symbol.
C++
MTAPIRES IMTManagerAPI::SymbolRequest( LPCWSTR name, // Symbol name LPCWSTR group, // Group name IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolRequest( string name, // Symbol name string group, // Group name CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Python
ManagerAPI.SymbolRequest( name, # Symbol name group # Group name )  
---  
Parameters
name
[in] Symbol name.
group
[in] Group name.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTManagerAPI::SymbolCreate](imtmanagerapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConSymbol::Symbol()](imtconsymbol_symbol.md "Symbol") value is used as the symbol name, [IMTConGroup::Group()](imtcongroup_group.md "Group") \- as the group name.
This method returns a symbol configuration with trade settings for the specified group.
This method cannot be called from event handlers (any methods of IMT*Sink classes).