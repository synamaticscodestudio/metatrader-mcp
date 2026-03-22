# ChartUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ History Data ](imtmanagerapi_charts.md "History Data")/ ChartUpdate | [](imtmanagerapi_chartdelete.md "ChartDelete") [](imtmanagerapi_chartreplace.md "ChartReplace") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ChartUpdate
Change historical data of a symbol.
C++
MTAPIRES IMTManagerAPI::ChartUpdate( LPCWSTR symbol, // Symbol const MTChartBar* bars, // Bars to change const UINT bars_total // The number of bars to change )  
---  
.NET
MTRetCode CIMTManagerAPI.ChartUpdate( string symbol, // Symbol MTChartBar[] bars // Bars to change )  
---  
Python
ManagerAPI.ChartUpdate( symbol, # Symbol bars # Bars to change )  
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
If the bar open price ([MTChartBar.open](mtchartbar.md "MTChartBar")) in the passed structure is equal to 0, this bar will be deleted.
The standard historical data update scheme is to pre-request the available data using the [IMTManagerAPI::ChartRequest](imtmanagerapi_chartrequest.md "ChartRequest") method, to make changes and then to send the changed data to the server using the IMTManagerAPI::ChartUpdate method.