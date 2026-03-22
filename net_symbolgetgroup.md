# SymbolGetGroup (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Symbols ](net_symbol.md "Symbols")/ SymbolGetGroup | [](net_symbolget.md "SymbolGet") [](net_user.md "Clients") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.SymbolGetGroup
Get the configuration of a symbol for a group by the name of the symbol.
MTRetCode MT5WebAPI.SymbolGetGroup( string name, // Symbol name string group, // Group name out MTConSymbol symbol // Symbol configuration )  
---  
Parameters
name
[in] Symbol name.
group
[in] The name of the group for which we get the symbol configuration.
symbol
[out] The MTConSymbol structure that describes the symbol configuration. The structure parameters are described in section ["Data Structure"](webapi_symbol_data_structure.md "Data Structure").
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.