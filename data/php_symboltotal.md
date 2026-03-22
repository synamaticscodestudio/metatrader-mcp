# SymbolTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Symbols ](php_symbol.md "Symbols")/ SymbolTotal | [](php_symboldelete.md "SymbolDelete") [](php_symbolnext.md "SymbolNext") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::SymbolTotal
Get the number of symbols created on the trade server.
MTAPIRES MTWebAPI::SymbolTotal( int &$total // Number of symbols )  
---  
Parameters
&$total
[out] The number of symbols on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.