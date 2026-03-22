# ChartHistoryGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Price Data ](imtreportapi_price.md "Price Data Functions")/ ChartHistoryGet | [](imtreportapi_tickhistoryget.md "TickHistoryGet") [](imtreportapi_dataset.md "Data set") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::ChartHistoryGet
Request minute bars for a symbol.
MTAPIRES IMTReportAPI::ChartHistoryGet( LPCWSTR symbol, // Symbol const INT64 from, // Beginning of the period const INT64 to, // End of the period MTChartBar*& bars, // Array of bars UINT& bars_total // Number of received bars )  
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
Note
Price data is stored on the history server in the form of one minute bars. Larger timeframes are formed on a client side from the minute bars according to the following principle: bars from the first to the last second of a period are used for calculation. For example, a H1 bar for 13:00 consists of minute bars within the range from 13:00:00 to 13:59:59.
The bars array that is passed by the function is sorted by the datetime field of the [MTChartBar](mtchartbar.md "MTChartBar") structure.
After using, the bars array must be released using the [IMTReportAPI::Free](imtreportapi_free.md "Free") method.