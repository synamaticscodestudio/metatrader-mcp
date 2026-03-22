# ChartRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ History Data ](imtmanagerapi_charts.md "History Data")/ ChartRequest | [](imtmanagerapi_charts.md "History Data") [](imtmanagerapi_chartdelete.md "ChartDelete") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ChartRequest
Request minute bars for a symbol.
C++
MTAPIRES IMTManagerAPI::ChartRequest( LPCWSTR symbol, // Symbol const INT64 from, // Beginning of the period const INT64 to, // End of the period MTChartBar*& bars, // Array of bars UINT& bars_total // Number of received bars )  
---  
.NET
MTChartBar[] CIMTManagerAPI.ChartRequest( string symbol, // Symbol long from, // Beginning of the period long to, // End of the period MTRetCode res // Response code )  
---  
Python
ManagerAPI.ChartRequest( symbol, # Symbol from, # Beginning of the period to # End of the period )  
---  
Parameters
news
[in] The symbol for which you want to request historical data (bars).
from
[in] The beginning of the period for which you need to get data. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end of the period for which you need to get data. The date is specified in seconds that have elapsed since 01.01.1970.
bars
[out] An array of bars ([MTChartBar](mtchartbar.md "MTChartBar") structures).
bars_total
[out] The number of obtained bars.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
The [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") code indicates that the access server through which the Manager API application is connected has not yet synchronized data with the historical server. In this case, you should perform another one or more data queries, making a pause between them.
Note
Price data on a History server is stored as 1-minute bars. Higher timeframes are created on the client side, based on the 1-minute bars according to the general principle: bars are used from the first to the last second of the period. For example, the one-hour bar for 13:00 consists of 1-minute bars from 13:00:00 to 13:59:59.
The passed array of bars is sorted by the datetime field of the [MTChartBar](mtchartbar.md "MTChartBar") structure.
After use, the 'bars' array must be released using the [IMTManagerAPI::Free](imtmanagerapi_free.md "Free") method.
The manager account performing the request must have the [IMTConManager::RIGHT_CFG_SYMBOLS](imtconmanager_enum.htm#enmanagerrights) and [IMTConManager::RIGHT_CHARTS](imtconmanager_enum.htm#enmanagerrights) permissions. In addition, the group, to which the manager belongs, must have access to the appropriate symbol ([IMTConGroup::Symbol*](imtcongroup_symboladd.md "SymbolAdd")). If the required permissions are not available, the method will return the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error.
The method is valid only if the [IMTManagerAPI::PUMP_MODE_SYMBOLS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.
The method cannot be called from event handlers (any IMT*Sink class methods).