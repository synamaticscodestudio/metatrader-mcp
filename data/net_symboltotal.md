# SymbolTotal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Symbols ](net_symbol.md "Symbols")/ SymbolTotal | [](net_symboldelete.md "SymbolDelete") [](net_symbolnext.md "SymbolNext") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.SymbolTotal
Get the number of symbols created on the trade server.
MTRetCode MT5WebAPI.SymbolTotal( out int total // The number of symbols )  
---  
Parameters
total
[out] The number of symbols on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.