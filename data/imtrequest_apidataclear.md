# ApiDataClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ApiDataClear | [](imtrequest_apidatarawmax.md "APIDataRawMax") [](imtrequest_apidataclearall.md "ApiDataClearAll") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ApiDataClear
Clear all custom parameters of requests set by an application.
C++
MTAPIRES IMTRequest::ApiDataClear( const USHORT app_id // Application identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.ApiDataClear( ushort app_id // Application identifier )  
---  
Parameters
app_id
[in] Application ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method clears all custom parameters of trade requests which were set by an application with the app_id.