# UserBackupRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserBackupRequest | [](imtadminapi_userarchiverequestbylogins.md "UserArchiveRequestByLogins") [](imtadminapi_userbackuprequestarray.md "UserBackupRequestArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserBackupRequest
Request a client record from a backup database.
C++
MTAPIRES IMTAdminAPI::UserBackupRequest( const INT64 backup, // Backup date const UINT64 login, // Login IMTUser* user // An object of a client record )  
---  
.NET
MTRetCode CIMTAdminAPI.UserBackupRequest( long backup, // Backup date long login, // Login CIMTUser user // An object of a client record )  
---  
Python
AdminAPI.UserBackupRequest( backup, # Backup date login # Login )  
---  
Parameters
backup
[in] The date of creation of the backup to which the requested user belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::UserBackupList](imtadminapi_userbackuplist.md "UserBackupList") method.
login
[in] The login of a user.
user
[out] An object of the client login. The user object must first be created using the [IMTAdminAPI::UserCreate](imtadminapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).
IMTAdminAPI::UserBackupRequest
Request a client record from a backup database of the specified server.
C++
MTAPIRES IMTAdminAPI.UserBackupRequest( const UINT64  server, // Server ID const INT64 backup, // Backup date const UINT64 login, // Login IMTUser* user // An object of a client record )  
---  
.NET
MTRetCode CIMTAdminAPI.UserBackupRequest( ulong  server, // Server ID long backup, // Backup date long login, // Login CIMTUser user // An object of a client record )  
---  
Python
AdminAPI.UserBackupRequest( server, # Server ID backup, # Backup date login # Login )  
---  
Parameters
server
[in] The identifier of the server from which the information should be requested.
backup
[in] The date of creation of the backup to which the requested user belongs. The date is specified in seconds that have elapsed since 01.01.1970. Dates of backups can be obtained using the [IMTAdminAPI::UserBackupList](imtadminapi_userbackuplist.md "UserBackupList") method.
login
[in] The login of a user.
user
[out] An object of the client login. The user object must first be created using the [IMTAdminAPI::UserCreate](imtadminapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).