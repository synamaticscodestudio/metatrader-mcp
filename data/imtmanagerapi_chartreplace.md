# ChartReplace (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ History Data ](imtmanagerapi_charts.md "History Data")/ ChartReplace | [](imtmanagerapi_chartupdate.md "ChartUpdate") [](imtmanagerapi_chartsplit.md "ChartSplit") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ChartReplace
Completely replace historical data in the specified period by the transmitted data
C++
MTAPIRES IMTManagerAPI::ChartReplace( LPCWSTR symbol, // Symbol const INT64 from, // Beginning of the period const INT64 to, // End of the period const MTChartBar* bars, // New bars const UINT bars_total // Number of new bars )  
---  
.NET
MTRetCode CIMTManagerAPI.ChartReplace( string symbol, // Symbol long  from, // Beginning of the period long to, // End of the period MTChartBar[] bars // New bars )  
---  
Python
ManagerAPI.ChartReplace( symbol, # Symbol from, # Beginning of the period to, # End of the period bars # New bars )  
---  
Parameters
symbol
[in] The symbol, for which you want to update historical data.
from
[in] The beginning date of the period for which you want to replace data. The date is specified in seconds since 01.01.1970.
to
[in] The end date of the period for which you want to replace data. The date is specified in seconds since 01.01.1970.
bars
[in] New bars described by the [MTChartBar](mtchartbar.md "MTChartBar") structure.
bars_total
[in] The number of passed bars.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code is returned.
Note
The method completely replaces historical data in the specified time interval with the data passed in the 'bars' parameter.
To delete an existing bar, specify the corresponding time (MTChartBar.datetime) and the zero price (MTChartBar.open) for the bar in the passed [MTChartBar](mtchartbar.md "MTChartBar") structure. If the bar with the specified time does not exist in the platform, a new bar with a zero price will be added.