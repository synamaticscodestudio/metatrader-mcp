# ApiDataGet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ApiDataGet | [](imtrequest_apidataset.md "ApiDataSet") [](imtrequest_apidataupdate.md "APIDataUpdate") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ApiDataGet
Get the INT64 type value of a custom parameter of a trade request.
C++
MTAPIRES IMTRequest::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter identifier INT64& value // Reference to the value )  const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out long value // Reference to the value )  
---  
Parameters
app_id
[in] The ID of the application which has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
IMTRequest::ApiDataGet
Get the UINT64 type value of a custom parameter of a trade request.
C++
MTAPIRES IMTRequest::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter identifier UINT64& value // Reference to the value ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out ulong value // Reference to the value )  
---  
Parameters
app_id
[in] The ID of the application which has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
IMTRequest::ApiDataGet
Get the double type value of a custom parameter of a trade request.
C++
MTAPIRES IMTRequest::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter identifier double& value // Reference to the value ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out double value // Reference to the value )  
---  
Parameters
app_id
[in] The ID of the application which has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.