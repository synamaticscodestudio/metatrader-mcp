# ChartRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ History Data ](imtadminapi_charts.md "History Data Functions")/ ChartRequest | [](imtadminapi_charts.md "History Data Functions") [](imtadminapi_chartdelete.md "ChartDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ChartRequest
Request minute bars for a symbol.
C++
MTAPIRES IMTAdminAPI::ChartRequest( LPCWSTR symbol, // Symbol const INT64 from, // Beginning of the period const INT64 to, // End of the period MTChartBar*& bars, // Array of bars UINT& bars_total // Number of received bars )  
---  
.NET
MTChartBar[] CIMTAdminAPI.ChartRequest( string symbol, // Symbol long from, // Beginning of the period long to, // End of the period MTRetCode res // Response code )  
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
The [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") code means that the access server used to connect the Manager API application has not yet synchronized the data with the history server. If that is the case, perform one or several new data requests with a pause between them.
Note
Price data is stored on the history server in the form of one minute bars. Larger timeframes are formed on a client side from the minute bars according to the following principle: bars from the first to the last second of a period are used for calculation. For example, a H1 bar for 13:00 consists of minute bars within the range from 13:00:00 to 13:59:59.
The bars array that is passed by the function is sorted by the datetime field of the [MTChartBar](mtchartbar.md "MTChartBar") structure.
After using, the bars array must be released using the [IMTAdminAPI::Free](imtadminapi_free.md "Free") method.
The manager account performing the request must have the [IMTConManager::RIGHT_CFG_SYMBOLS](imtconmanager_enum.htm#enmanagerrights) and [IMTConManager::RIGHT_CHARTS](imtconmanager_enum.htm#enmanagerrights) permissions. In addition, the group, to which the manager belongs, must have access to the appropriate symbol ([IMTConGroup::Symbol*](imtcongroup_symboladd.md "SymbolAdd")). If the required permissions are not available, the method will return the [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error.
This method cannot be called from event handlers (any methods of IMT*Sink classes).