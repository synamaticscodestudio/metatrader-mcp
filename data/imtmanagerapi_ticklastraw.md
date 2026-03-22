# TickLastRaw (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Tick Data ](imtmanagerapi_tick.md "Tick Data Functions")/ TickLastRaw | [](imtmanagerapi_ticklast.md "TickLast") [](imtmanagerapi_tickstat.md "TickStat") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::TickLastRaw
Get the last raw quote of a symbol.
C++
MTAPIRES IMTManagerAPI::TickLastRaw( LPCWSTR symbol, // Symbol MTTickShort& tick // Reference to the quote structure )  
---  
.NET
MTRetCode CIMTManagerAPI.TickLastRaw( string symbol, // Symbol out MTTickShort tick // Quote structure )  
---  
Python
ManagerAPI.TickLastRaw( str symbol # Symbol )  
---  
Parameters
symbol
[in] The symbol, for which you need to get a quote.
tick
[out] A reference to the structure describing the quote ([MTTickShort](mttickshort.md "MTTickShort")).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
For this method to work, the manager account must have the [IMTConManager::RIGHT_QUOTES_RAW](imtconmanager_enum.htm#enmanagerrights) permission enabled. If the permission is absent, the error [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") is returned.
The method returns original quotes provided by the history server. These quotes do not include spread difference settings ([IMTConGroupSymbol::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff")) which are used either for the current manager or for a client group.
The symbol for which data are requested must be included into the [list of selected symbols](imtmanagerapi_selected.md "Selected Symbols").