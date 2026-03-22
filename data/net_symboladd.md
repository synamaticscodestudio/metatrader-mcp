# SymbolAdd (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Symbols ](net_symbol.md "Symbols")/ SymbolAdd | [](net_symbol.md "Symbols") [](net_symboldelete.md "SymbolDelete") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.SymbolAdd
Add or change a symbol configuration on the server.
MTRetCode MT5WebAPI.SymbolAdd( MTConSymbol symbol, // Description of the symbol to create out MTConSymbol newSymbol // Description of the created symbol )  
---  
Parameters
symbol
[in] The MTConSymbol structure that describes the configuration of the symbol that you need to create. Description of the structure parameters is provided in the ["Data Structure"](webapi_symbol_data_structure.md "Data Structure") section.
newSymbol
[Out] The MTConSymbol object that describes the configuration of the symbol that you need to create. Description of the structure parameters is provided in the ["Data Structure"](webapi_symbol_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
  * To create a symbol in the MTConSymbol structure, you only need to specify its name.

  * When creating an object using the MTConSymbol.CreateDefault method, all the structure fields are filled with zeros or default values. When updating a symbol, you should either set all its parameters manually or get its configuration using the [MT5WebAPI::SymbolNext](net_symbolnext.md "SymbolNext") or [MT5WebAPI::SymbolGet](net_symbolget.md "SymbolGet") method and edit it appropriately.

  * This method works only when connected to the main trade server. Otherwise, error [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
  * When the command is run the presence of the symbol you are adding is checked. A key field for comparison is the name of the symbol. If such a symbol already exists, its settings are updated.
  * Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
  * To run the command, [the manager account](webapi_rest_authentication.htm#client_start) must have rights to connect as an administrator and edit symbol configurations. Otherwise, error code [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") is returned.
