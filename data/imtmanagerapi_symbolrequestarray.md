# SymbolRequestArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolRequestArray | [](imtmanagerapi_symbolrequest.md "SymbolRequest") [](imtmanagerapi_symbolexist.md "SymbolExist") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolRequestArray
Request from the server an array of symbols by mask.
C++
MTAPIRES IMTManagerAPI::SymbolRequestArray( LPCWSTR mask, // Mask LPCWSTR group, // Group name IMTConSymbolArray* symbols // Symbols array object )  
---  
.NET
MTRetCode CIMTManagerAPI.SymbolRequestArray( string mask, // Mask string group, // Group name CIMTConSymbolArray symbols // Symbols array object )  
---  
Python
ManagerAPI.SymbolRequestArray( mask, # Mask group # Group name )  
---  
Parameters
mask
[in] One or more symbols separated by commas. Specify the full name of the symbol, including the path. For example, Forex\EURUSD. The symbol name can be obtained by using the [IMTConSymbol::Symbol](imtconsymbol_symbol.md "Symbol") method. Symbols can also be specified using wildcard characters: "*" (any value) and "!" (exclude). For example, Forex\\*,!Forex\EURUSD — all symbols in the Forex subgroup except EURUSD. The maximum length of the mask is 512 characters (including the end-of-line character).
group
[in] The name of the group whose symbol settings should be used ([IMTConGroupSymbol](imtcongroupsymbol.md "IMTConGroupSymbol")). The method will pass symbol configurations based on how they are redefined for the specified group. If the parameter is null, the method will pass the basic symbol settings.
symbols
[out] Symbols array object [IMTConSymbolArray](imtcongrouparray.md "IMTConGroupArray"). Must be previously created by using the [IMTManagerAPI::SymbolCreateArray](imtmanagerapi_symbolcreatearray.md "SymbolCreateArray") object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).