# ChartUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ History Data ](serverapi_chart.md "History Data")/ ChartUpdate | [](imtserverapi_chartdelete.md "ChartDelete") [](imtserverapi_chartsplit.md "ChartSplit") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ChartUpdate
Change historical data of a symbol.
MTAPIRES IMTAdminAPI::ChartUpdate( LPCWSTR symbol, // Symbol const MTChartBar* bars, // Bars to change const UINT bars_total // The number of bars to change )  
---  
Parameters
symbol
[in] The symbol, for which you want to update historical data.
bars
[in] Bars you want to update, described by the [MTChartBar](mtchartbar.md "MTChartBar") structure.
bars_total
[in] The number of bars to update.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method can be used only on history servers.