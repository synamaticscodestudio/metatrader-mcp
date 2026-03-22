# ChartDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ History Data ](imtmanagerapi_charts.md "History Data")/ ChartDelete | [](imtmanagerapi_chartrequest.md "ChartRequest") [](imtmanagerapi_chartupdate.md "ChartUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ChartDelete
Delete the bar of a symbol.
C++
MTAPIRES IMTManagerAPI::ChartDelete( LPCWSTR symbol, // Symbol const INT64* bars_dates, // Dates of bars to delete const UINT bars_dates_total // Number of bars to delete )  
---  
.NET
MTRetCode CIMTManagerAPI.ChartDelete( string symbol, // Symbol long bars_dates // Dates of bars to delete )  
---  
Python
ManagerAPI.ChartDelete( symbol, # Symbol bars_dates # Dates of bars to delete )  
---  
Parameters
symbol
[in] The symbol, for which you want to delete historical data.
bars_dates
[in] Array of dates of bars to be deleted. Specified in seconds since 01.01.1970.
bars_dates_total
[in] Number of dates in the bars_dates array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.