# ChartRequest (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ History Data ](imtgatewayapi_charts.md "History Data")/ ChartRequest | [](imtgatewayapi_charts.md "History Data") [](imtgatewayapi_chartdelete.md "ChartDelete") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::ChartRequest
Request minute bars for a symbol.
C++
MTAPIRES IMTGatewayAPI::ChartRequest( LPCWSTR symbol, // Symbol const INT64 from, // Beginning of the period const INT64 to, // End of the period MTChartBar*& bars, // Array of bars UINT& bars_total // Number of received bars )  
---  
.NET
MTChartBar[] CIMTGatewayAPI.ChartRequest( string symbol, // Symbol long from, // Beginning of the period long to, // End of the period out MTRetCode res // Response code )  
---  
Parameters
symbol
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
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
The [MT_RET_OK_NONE](retcodes_successful.md "Successful completion") code means that the access server used to connect the Gateway API application has not yet synchronized the data with the history server. If that is the case, perform one or several new data requests with a pause between them.
Note
Price data is stored on the history server in the form of one minute bars. Larger timeframes are formed on a client side from the minute bars according to the following principle: bars from the first to the last second of a period are used for calculation. For example, a H1 bar for 13:00 consists of minute bars within the range from 13:00:00 to 13:59:59.
The bars array that is passed by the function is sorted by the datetime field of the [MTChartBar](mtchartbar.md "MTChartBar") structure.
After using, the bars array must be released using the [IMTGatewayAPI::Free](imtgatewayapi_free.md "Free") method.