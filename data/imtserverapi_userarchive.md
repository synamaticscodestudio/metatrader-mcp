# UserArchive (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserArchive | [](imtserverapi_userdepositchangeraw.md "UserDepositChangeRaw") [](imtserverapi_userarchiveget.md "UserArchiveGet") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserArchive
Move a client record to an archive database.
MTAPIRES IMTServerAPI::UserArchive( const UINT64 login, // User's login )  
---  
Parameters
login
[in] The login of a user that will be moved to an archive.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.