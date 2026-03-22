# ChartDelete (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ History Data ](imtgatewayapi_charts.md "History Data")/ ChartDelete | [](imtgatewayapi_chartrequest.md "ChartRequest") [](imtgatewayapi_chartupdate.md "ChartUpdate") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::ChartDelete
Delete a bar by the symbol.
C++
MTAPIRES IMTGatewayAPI::ChartDelete( LPCWSTR symbol, // Symbol const INT64* bars_dates, // Dates of bars to delete const UINT bars_dates_total // The number of bars to delete )  
---  
.NET
MTRetCode CIMTGatewayAPI.ChartDelete( string symbol, // Symbol long[] bars_dates // Dates of bars to delete )  
---  
Parameters
symbol
[in] The symbol, for which you want to delete historical data.
bars_dates
[in] An array of the dates of bars you want to delete. Dates are specified in seconds that have elapsed since 01.01.1970.
bars_dates_total
[in] The number of bars to delete.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.