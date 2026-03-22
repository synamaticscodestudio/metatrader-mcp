# APIDataUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ APIDataUpdate | [](imtuser_apidatanext.md "APIDataNext") [](imtuser_apidataclear.md "APIDataClear") |
| --- | --- | --- |
| --- | --- |

IMTUser::APIDataUpdate
Updates a custom parameter of type INT64 for a client record.
C++
MTAPIRES IMTUser::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const INT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTAPIRES IMTUser::APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID long value // Parameter value )  
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
A client record can contain up to 16 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
IMTUser::APIDataUpdate
Updates a custom parameter of type UINT64 for a client record.
C++
MTAPIRES IMTUser::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const UINT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTAPIRES IMTUser::APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID ulong value // Parameter value )  
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
A client record can contain up to 16 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
IMTUser::APIDataUpdate
Updates a custom parameter of double type for a client record.
C++
MTAPIRES IMTUser::APIDataUpdate( const UINT pos, // Parameter position const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const double value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTAPIRES IMTUser::APIDataUpdate( uint pos, // Parameter position ushort app_id, // Application ID byte id, // Parameter ID double value // Parameter value )  
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
A client record can contain up to 16 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.