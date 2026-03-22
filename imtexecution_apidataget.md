# ApiDataGet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ ApiDataGet | [](imtexecution_apidataset.md "ApiDataSet") [](imtexecution_apidataupdate.md "APIDataUpdate") |
| --- | --- | --- |
| --- | --- |

IMTExecution::ApiDataGet
Get the INT64 type value of a custom parameter of a trade execution.
C++
MTAPIRES IMTExecution::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID INT64& value // Value reference )  const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out long value // Value reference )  
---  
Parameters
app_id
[in] The ID of the application which has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTExecution::ApiDataGet
Get the UINT64 type value of a custom parameter of a trade execution.
C++
MTAPIRES IMTExecution::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID UINT64& value // Value reference ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out ulong value // Value reference )  
---  
Parameters
app_id
[in] The ID of the application which has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to a custom parameter value .
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTExecution::ApiDataGet
Get the double type value of a custom parameter of a trade execution.
C++
MTAPIRES IMTExecution::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID double& value // Value reference ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out double value // Value reference )  
---  
Parameters
app_id
[in] The ID of the application which has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to a custom parameter value .
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.