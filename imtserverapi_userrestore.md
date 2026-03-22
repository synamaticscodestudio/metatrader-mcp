# UserRestore (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserRestore | [](imtserverapi_userarchivelogins.md "UserArchiveLogins") [](imtserverapi_notificationssend.md "NotificationsSend") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserRestore
Restore a client record from an archive or a backup database.
MTAPIRES IMTServerAPI::UserRestore( IMTUser* user // A client base to restore )  
---  
Parameters
user
[in] An object of the client record to restore.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Restored users are not deleted from the archive.
When a restored account is once again moved to archive or a backup database, new data replace previously stored data.