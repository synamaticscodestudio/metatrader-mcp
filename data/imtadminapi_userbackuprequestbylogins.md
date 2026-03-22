# UserBackupRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserBackupRequestByLogins | [](imtadminapi_userbackuprequestarray.md "UserBackupRequestArray") [](imtadminapi_userbackuplist.md "UserBackupList") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserBackupRequestByLogins
Request accounts from the specified server's backup, filtered by a list of logins.
C++
MTAPIRES IMTAdminAPI.UserBackupRequestByLogins( const UINT64  server, // Server ID const INT64 backup, // Backup date const UINT64* logins, // Logins const UINT logins_total, // Number of logins IMTUserArray* users // Array of accounts )  
---  
.NET
MTRetCode CIMTAdminAPI.UserBackupRequestByLogins( ulong  server, // Server ID long backup, // Backup date ulong[] logins, // Logins CIMTUserArray users // Array of accounts )  
---  
Python
AdminAPI.UserBackupRequestByLogins( server, # Server ID backup, # Backup date logins # Logins )  
---  
Parameters
server
[in] The ID of the server, from which you request the data.
backup
[in] The creation date of the backup from which accounts should be requested. The date is specified in seconds since 01.01.1970. Backup creation dates can be obtained using the [IMTAdminAPI::UserBackupList](imtadminapi_userbackuplist.md "UserBackupList") method.
logins
[in] An array of logins.
logins_total
[in] Number of logins in the 'logins' array.
user
[out] An object of the accounts array. The 'users' object must be previously created using the [IMTAdminAPI::UserCreateArray](imtadminapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).