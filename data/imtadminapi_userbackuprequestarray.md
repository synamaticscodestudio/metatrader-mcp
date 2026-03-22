# UserBackupRequestArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserBackupRequestArray | [](imtadminapi_userbackuprequest.md "UserBackupRequest") [](imtadminapi_userbackuprequestbylogins.md "UserBackupRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserBackupRequestArray
Request accounts from the specified server's backup, filtered by groups.
C++
MTAPIRES IMTAdminAPI.UserBackupRequestArray( const UINT64  server, // Server identifier const INT64 backup, // Backup date LPCWSTR groups, // Groups IMTUserArray* users // Array of accounts )  
---  
.NET
MTRetCode CIMTAdminAPI.UserBackupRequestArray( ulong  server, // Server ID long backup, // Backup date string groups, // Groups CIMTUserArray users // Array of accounts )  
---  
Python
AdminAPI.UserBackupRequestArray( server, # Server ID backup, # Backup date groups # Groups )  
---  
Parameters
server
[in] The ID of the server, from which you request the data.
backup
[in] The creation date of the backup from which accounts should be requested. The date is specified in seconds since 01.01.1970. Backup creation dates can be obtained using the [IMTAdminAPI::UserBackupList](imtadminapi_userbackuplist.md "UserBackupList") method.
groups
[in] One or more groups, separated by commas, from which accounts are requested. The full group name must be specified, including the path. For example, demo\demoforex. The group name can be obtained using the [IMTConGroup::Group](imtcongroup_group.md "Group") method.
user
[out] An object of the accounts array. The 'users' object must be previously created using the [IMTAdminAPI::UserCreateArray](imtadminapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).