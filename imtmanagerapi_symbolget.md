# SymbolGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolGet | [](imtmanagerapi_symbolnext.md "SymbolNext") [](imtmanagerapi_symbolrequest.md "SymbolRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolGet
Gets the symbol configuration by the name.
C++
MTAPIRES IMTManagerAPI::SymbolGet( LPCWSTR name, // Name of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolGet( string name, // Name of the configuration CIMTConSymbol obj // An object of the symbol configuration )  
---  
Python
ManagerAPI.SymbolGet( str name # Name of the configuration )  
---  
ManagerAPI.SymbolGetArray()  
---  
Parameters
name
[in] The name of the configuration. The [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the name..
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTManagerAPI::SymbolCreate](imtmanagerapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method returns a symbol configuration with default trade settings. The method is valid only if the [IMTManagerAPI::PUMP_MODE_SYMBOLS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.
IMTManagerAPI::SymbolGet
Get symbol settings taking into account that they are overridden for the specified group.
C++
MTAPIRES IMTManagerAPI::SymbolGet( LPCWSTR name, // Name of the configuration LPCWSTR group, // Group name IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolGet( string name, // Name of the configuration string group, // Group name CIMTConSymbol obj // An object of the symbol configuration )  
---  
Python
ManagerAPI.SymbolGet( str name, # Name of the configuration str group # Group name )  
---  
Parameters
name
[in] The name of the configuration. The [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") value is used as the name..
group
[in] Name of a group. The [IMTConGroup::Group](imtcongroup_group.md "Group") value is used as the group name..
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTManagerAPI::SymbolCreate](imtmanagerapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method returns a symbol configuration with trade settings for the specified group. The method is valid only if the [IMTManagerAPI::PUMP_MODE_SYMBOLS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.