# TickLast (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Tick Data ](serverapi_ticks.md "Tick Data")/ TickLast | [](imtserverapi_tickaddstat.md "TickAddStat") [](imtserverapi_tickstat.md "TickStat") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TickLast
For the last raw (not processed in accordance with the symbol settings) quote for the specified symbol.
MTAPIRES IMTServerAPI::TickLast( LPCWSTR symbol, // Symbol MTTickShort& tick // A pointer to the quote structure )  
---  
Parameters
symbol
[in] The symbol, for which you need to get a quote.
tick
[out] A pointer to the structure describing the quote ([MTTickShort](mttickshort.md "MTTickShort")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTServerAPI::TickLast
Get the last quote for the specified symbol processed in accordance with its settings for a certain group.
MTAPIRES IMTServerAPI::TickLast( const IMTConSymbol* symbol, // An object of the symbol configuration MTTickShort& tick // A pointer to the quote structure )  
---  
Parameters
symbol
[in] An object of the symbol configuration. The symbol object must be first created using the [IMTServerAPPI::SymbolCreate](imtserverapi_symbolcreate.md "SymbolCreate") method.
tick
[out] A pointer to the structure describing the quote ([MTTickShort](mttickshort.md "MTTickShort")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method does not work on history servers, because they do not have access to the user [group](config_group.md "Groups") settings. If you try to run it on a history server, the [MT_RET_ERR_NOTSUPPORTED](retcodes_api.md "API") error will be returned.
Symbol settings, according to which quotes received by this method are processed, correspond to the settings received by calling [IMTServerAPI::SymbolGet](imtserverapi_symbolget.htm#group) for a specific group.
Example
void GetCurrentTicks(LPCWSTR group_name,LPCWSTR symbol_name,MTTickShort& tick) { IMTConGroup *group=api->GroupCreate(); api->GroupGet(group_name); //---  IMTConSymbol *symbol=api->SymbolCreate(); api->SymbolGet(symbol_name,group,symbol); //--- api->TickLast(symbol,tick); }  
---