# SymbolNext (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Symbols ](net_symbol.md "Symbols")/ SymbolNext | [](net_symboltotal.md "SymbolTotal") [](net_symbolget.md "SymbolGet") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.SymbolNext
Get the configuration of a symbol by its index in the list of symbols of the platform.
MTRetCode MT5WebAPI.SymbolNext( int pos, // Symbol position out MTConSymbol symbol // Symbol configuration )  
---  
Parameters
pos
[in] Position of the symbol, starting with 0.
symbol
[out] The MTConSymbol structure that describes the symbol configuration. The structure parameters are described in section ["Data Structure"](webapi_symbol_data_structure.md "Data Structure").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.