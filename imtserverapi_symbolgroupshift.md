# SymbolGroupShift (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Symbols ](serverapi_config_symbol.md "Symbols")/ SymbolGroupShift | [](imtserverapi_symbolgroupdelete.md "SymbolGroupDelete") [](imtserverapi_symbolgrouptotal.md "SymbolGroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SymbolGroupShift
Change the position of a subgroup of symbols in a list.
MTAPIRES IMTServerAPI::SymbolGroupShift( const UINT pos, // position of symbol subgroup const int shift // shift )  
---  
Parameters
pos
[in] Position of the symbol subgroup, starting from 0.
shift
[in] The shift of the subgroup relative to its current position. A negative value means shift towards the top of the list, a positive value shifts the subgroup towards the end.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The subgroup position can only be changed from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.