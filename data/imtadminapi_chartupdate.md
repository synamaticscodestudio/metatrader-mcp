# ChartUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ History Data ](imtadminapi_charts.md "History Data Functions")/ ChartUpdate | [](imtadminapi_chartdelete.md "ChartDelete") [](imtadminapi_chartreplace.md "ChartReplace") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ChartUpdate
Change historical data of a symbol.
C++
MTAPIRES IMTAdminAPI::ChartUpdate( LPCWSTR symbol, // Symbol const MTChartBar* bars, // Bars to change const UINT bars_total // The number of bars to change )  
---  
.NET
MTRetCode CIMTAdminAPI.ChartUpdate( string symbol, // Number of new bars MTChartBar[] bars // Bars to change )  
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
If the open price of a bar ([MTChartBar.open](mtchartbar.md "MTChartBar")) passed in the structure is 0, the bar will be deleted.
The standard scheme of updating history data is to firstly request the available data using [IMTAdminAPI::ChartRequest](imtadminapi_chartrequest.md "ChartRequest"), then make changes and then pass changes to the server using the IMTAdminAPI::ChartUpdate method.