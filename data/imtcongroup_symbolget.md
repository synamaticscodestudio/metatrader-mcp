# SymbolGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ SymbolGet | [](imtcongroup_symbolnext.md "SymbolNext") [](imtcongroupsymbol.md "IMTConGroupSymbol") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::SymbolGet
Gets a symbol setting at the specified path (with the full specified name).
C++
MTAPIRES IMTConGroup::SymbolGet( LPCWSTR name, // Path IMTConGroupSymbol* symbol // An object of the symbol setting )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.SymbolGet( string name, // Path CIMTConGroupSymbol symbol // An object of the symbol setting )  
---  
Python (Manager API)
MTConGroup.SymbolGet()  
---  
Parameters
name
[in] The path to a symbol or group of symbols, which is specified in the [symbol settings for the group](config_group.htm#symbols).
symbol
[out] An object of symbol setting. The symbol object must be first created using [IMTAdminAPI::GroupSymbolCreate](imtadminapi_groupsymbolcreate.md "GroupSymbolCreate"), [IMTManagerAPI::GroupSymbolCreate](imtmanagerapi_groupsymbolcreate.md "GroupSymbolCreate"), [IMTServerAPI::GroupSymbolCreate](imtserverapi_groupsymbolcreate.md "GroupSymbolCreate") or [IMTGatewayAPI::GroupSymbolCreate](imtgatewayapi_groupsymbolcreate.md "GroupSymbolCreate").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method copies the parameters of a symbol with a specified name to the symbol object.
[IMTConGroupSymbol::Path](imtcongroupsymbol_path.md "Path") value is used as the path to the symbol.