# APIDataNext (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ APIDataNext | [](imtuser_apidataget.md "APIDataGet") [](imtuser_apidataupdate.md "APIDataUpdate") |
| --- | --- | --- |
| --- | --- |

IMTUser::APIDataNext
Gets an INT64-type custom parameter of a client record by position.
C++
MTAPIRES IMTUser::APIDataNext( const UINT pos, // Position of the parameter USHORT& app_id, // Application ID UCHAR& id, // Parameter ID INT64& value // A reference to the value ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.APIDataNext( uint pos, // Position of the parameter out ushort app_id, // Application ID out byte id, // Parameter ID out long value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[out] A pointer to the ID of the application that gas set the custom parameter.
id
[out] A pointer to the parameter ID.
value
[out] A pointer to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTUser::APIDataNext
Gets an UINT64-type custom parameter of a client record by position.
C++
MTAPIRES IMTUser::APIDataNext( const UINT pos, // Position of the parameter USHORT& app_id, // Application ID UCHAR& id, // Parameter ID UINT64& value // A pointer to the value ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.APIDataNext( uint pos, // Position of the parameter out ushort app_id, // Application ID out byte id, // Parameter ID out ulong value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[out] A pointer to the ID of the application that gas set the custom parameter.
id
[out] A pointer to the parameter ID.
value
[out] A pointer to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
IMTUser::APIDataNext
Gets an double-type custom parameter of a client record by position.
C++
MTAPIRES IMTUser::APIDataNext( const UINT pos, // Position of the parameter USHORT& app_id, // Application ID UCHAR& id, // Parameter ID double& value // A pointer to the value ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.APIDataNext( uint pos, // Position of the parameter out ushort app_id, // Application ID out byte id, // Parameter ID out double value // A reference to the value )  
---  
Parameters
pos
[in] Position of the parameter, starting with 0.
app_id
[out] A pointer to the ID of the application that gas set the custom parameter.
id
[out] A pointer to the parameter ID.
value
[out] A pointer to a value of the custom parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.