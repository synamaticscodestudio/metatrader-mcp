# ApiDataClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ ApiDataClear | [](imtexecution_apidatarawmax.md "APIDataRawMax") [](imtexecution_apidataclearall.md "ApiDataClearAll") |
| --- | --- | --- |
| --- | --- |

IMTExecution::ApiDataClear
Clear all custom parameters of trade executions set by an application.
C++
MTAPIRES IMTExecution::ApiDataClear( const USHORT app_id // Application ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.ApiDataClear( ushort app_id // Application ID )  
---  
Parameters
app_id
[in] Application ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all custom parameters of trade executions set by an application with the app_id.