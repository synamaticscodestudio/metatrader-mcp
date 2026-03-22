# APIDataClear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ APIDataClear | [](imtuser_apidataupdate.md "APIDataUpdate") [](imtuser_apidataclearall.md "APIDataClearAll") |
| --- | --- | --- |
| --- | --- |

IMTUser::ApiDataClear
Clear all user parameters set by an application.
C++
MTAPIRES IMTUser::ApiDataClear( const USHORT app_id // Application ID )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ApiDataClear( ushort app_id // Application ID )  
---  
Parameters
app_id
[in] Application ID.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all custom parameters of client records set by an application with the ID app_id.