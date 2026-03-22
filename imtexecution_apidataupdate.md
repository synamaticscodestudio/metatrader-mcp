# APIDataUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ APIDataUpdate | [](imtexecution_apidataget.md "ApiDataGet") [](imtexecution_apidatanext.md "APIDataNext") |
| --- | --- | --- |
| --- | --- |

IMTExecution::APIDataUpdate
Add or update the custom parameter of type INT64 for a trade execution.
C++
MTAPIRES IMTExecution::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const INT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.APIDataUpdate( uint  pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID long value // Parameter value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application that sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A trade execution can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (replaces existing value) to the corresponding [API-field of the order](imtorder_apidataupdate.md "APIDataUpdate") affected by the given trade execution.
IMTExecution::APIDataUpdate
Add or update the custom parameter of type UINT64 for a trade execution.
C++
MTAPIRES IMTExecution::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const UINT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.APIDataUpdate( uint  pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID ulong value // Parameter value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application that sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A trade execution can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (replaces existing value) to the corresponding [API-field of the order](imtorder.md "IMTOrder") affected by the given trade execution.
IMTExecution::APIDataUpdate
Add or update the custom parameter of the double type for a trade execution.
MTAPIRES IMTExecution::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const double value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.APIDataUpdate( uint  pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID double value // Parameter value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[in] The ID of the application that sets the custom parameter.
id
[in] Parameter ID.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A trade execution can contain up to 8 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
The field value is copied (replaces existing value) to the corresponding [API-field of the order](imtorder.md "IMTOrder") affected by the given trade execution.