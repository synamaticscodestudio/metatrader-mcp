# SymbolNext (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Symbols ](php_symbol.md "Symbols")/ SymbolNext | [](php_symboltotal.md "SymbolTotal") [](php_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SymbolNext
Get the configuration of a symbol by its index in the list of symbols of the platform.
MTAPIRES MTWebAPI::SymbolNext( int $pos, // Symbol position MTConSymbol &$symbol // Symbol configuration )  
---  
Parameters
$pos
[in] Position of the symbol, starting with 0.
&$symbol
[out] The MTConSymbol structure that describes the symbol configuration. The structure parameters are described in section ["Data Structure"](webapi_symbol_data_structure.md "Data Structure").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.