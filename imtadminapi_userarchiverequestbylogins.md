# UserArchiveRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserArchiveRequestByLogins | [](imtadminapi_userarchiverequestarray.md "UserBackupRequestArray") [](imtadminapi_userbackuprequest.md "UserBackupRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserArchiveRequestByLogins
Request accounts from an archive databased, filtered by logins.
C++
MTAPIRES IMTAdminAPI.UserArchiveRequestByLogins( const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTUserArray* users // Array of accounts )  
---  
.NET
MTRetCode CIMTAdminAPI.UserArchiveRequestByLogins( ulong[] logins, // Logins CIMTUserArray users // Array of accounts )  
---  
Python
AdminAPI.UserArchiveRequestArray( logins # Logins )  
---  
Parameters
logins
[in] An array of logins.
logins_total
[in] Number of logins in the 'logins' array.
user
[out] An object of the accounts array. The 'users' object must be previously created using the [IMTAdminAPI::UserCreateArray](imtadminapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).