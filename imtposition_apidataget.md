# ApiDataGet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ApiDataGet | [](imtposition_apidataset.md "ApiDataSet") [](imtposition_apidataclear.md "ApiDataClear") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ApiDataGet
Get the INT64 type value of a custom parameter of a position.
C++
MTAPIRES IMTPosition::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID INT64& value // A reference to the value ) const  
---  
.NET (Gateway/Manager API)s
MTRetCode CIMTPosition.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out long value // Value )  
---  
Parameters
app_id
[in] The ID of the application that has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to the value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTPosition::ApiDataGet
Get the UINT64 type value of a custom parameter of a position.
C++
MTAPIRES IMTPosition::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID UINT64& value // A reference to the value ) const  
---  
.NET (Gateway/Manager API)s
MTRetCode CIMTPosition.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out ulong value // Value )  
---  
Parameters
app_id
[in] The ID of the application that has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to the value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTPosition::ApiDataGet
Get the double-type value of a custom parameter of a position.
C++
MTAPIRES IMTPosition::ApiDataGet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID double& value // A reference to the value ) const  
---  
.NET (Gateway/Manager API)s
MTRetCode CIMTPosition.ApiDataGet( ushort app_id, // Application ID byte id, // Parameter ID out double value // Value )  
---  
Parameters
app_id
[in] The ID of the application that has set the custom parameter.
id
[in] Parameter ID.
value
[out] A reference to the value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.