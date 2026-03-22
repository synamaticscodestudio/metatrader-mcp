# SymbolGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Symbols ](php_symbol.md "Symbols")/ SymbolGet | [](php_symbolnext.md "SymbolNext") [](php_symbolgetgroup.md "SymbolGetGroup") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SymbolGet
Get the symbol configuration by its name.
MTAPIRES MTWebAPI::SymbolGet( string $name, // Symbol name MTConSymbol &$symbol // Symbol configuration )  
---  
Parameters
$name
[in] Symbol name.
&$symbol
[out] The MTConSymbol structure that describes the symbol configuration. The structure parameters are described in section ["Data Structure"](webapi_symbol_data_structure.md "Data Structure").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The string specifying the group name must be passed in the UTF-8 format.