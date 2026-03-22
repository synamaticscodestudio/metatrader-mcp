# APIDataSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ APIDataSet | [](imtuser_limitpositionsvalue.md "LimitPositionsValue") [](imtuser_apidataget.md "APIDataGet") |
| --- | --- | --- |
| --- | --- |

IMTUser::ApiDataSet
Set the custom parameter of type INT64 for a client record.
C++
MTAPIRES IMTUser::ApiDataSet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const INT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ApiDataSet( ushort app_id, // Application ID byte id, // Parameter ID long value // Parameter value )  
---  
Parameters
app_id
[in] The ID of the application that sets the custom parameter. Values ​​from 1 to 4095 inclusive are allowed.
id
[in] Parameter ID. Values ​​from 1 to 15 inclusive are allowed.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A client record can contain up to 16 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
IMTUser::ApiDataSet
Set the custom parameter of type UINT64 for a client record.
C++
MTAPIRES IMTUser::ApiDataSet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const UINT64 value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ApiDataSet( ushort app_id, // Application ID byte id, // Parameter ID ulong value // Parameter value )  
---  
Parameters
app_id
[in] The ID of the application that sets the custom parameter. Values ​​from 1 to 4095 inclusive are allowed.
id
[in] Parameter ID. Values ​​from 1 to 15 inclusive are allowed.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A client record can contain up to 16 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.
IMTUser::ApiDataSet
Set the custom parameter of the double type for a client record.
C++
MTAPIRES IMTUser::ApiDataSet( const USHORT app_id, // Application ID const UCHAR id, // Parameter ID const double value // Parameter value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ApiDataSet( ushort app_id, // Application ID byte id, // Parameter ID double value // Parameter value )  
---  
Parameters
app_id
[in] The ID of the application that sets the custom parameter. Values ​​from 1 to 4095 inclusive are allowed.
id
[in] Parameter ID. Values ​​from 1 to 15 inclusive are allowed.
value
[in] Parameter value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A client record can contain up to 16 custom parameters.
The parameter is defined as a binding of the application ID (app_id) and the parameter identifier (id). This definition allows to avoid conflicts when running several plugins on one server, as well as to use these parameters together.