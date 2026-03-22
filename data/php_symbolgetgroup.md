# SymbolGetGroup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Symbols ](php_symbol.md "Symbols")/ SymbolGetGroup | [](php_symbolget.md "SymbolGet") [](php_user.md "Clients") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SymbolGetGroup
Get the configuration of a symbol for a group by the name of the symbol.
MTAPIRES MTWebAPI::SymbolGetGroup( string $name, // Symbol name string $group, // Group name MTConSymbol &$symbol // Symbol configuration )  
---  
Parameters
$name
[in] Symbol name.
$group
[in] The name of the group for which we get the symbol configuration.
&$symbol
[out] The MTConSymbol structure that describes the symbol configuration. The structure parameters are described in section ["Data Structure"](webapi_symbol_data_structure.htm#symbol).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The strings specifying the group and symbol name must be passed in the UTF-8 format.