# UserRestore (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserRestore | [](imtadminapi_userbackuplist.md "UserBackupList") [](imtadminapi_userrestorebatch.md "UserRestoreBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserRestore
Restore a user from an archive or a backup database.
C++
MTAPIRES IMTAdminAPI::UserRestore( IMTUser* user // A user restore )  
---  
.NET
MTRetCode CIMTAdminAPI.UserRestore( CIMTUser user // A user to restore )  
---  
Python
AdminAPI.UserRestore( user # A user to restore )  
---  
Parameters
user
[in] An object of the client record to restore.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Restored users are not deleted from the archive.
When a restored account is once again moved to archive or a backup database, new data replace previously stored data.