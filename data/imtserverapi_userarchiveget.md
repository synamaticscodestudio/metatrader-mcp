# UserArchiveGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserArchiveGet | [](imtserverapi_userarchive.md "UserArchive") [](imtserverapi_userarchivelogins.md "UserArchiveLogins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserArchiveGet
Request a client record from an archive database.
MTAPIRES IMTServerAPI::UserArchiveGet( const UINT64 login, // Login IMTUser* user // An object of the client record )  
---  
Parameters
login
[in] The login of a user.
user
[out] An object of the client login. The user object must first be created using the [IMTServerAPI::UserCreate](imtserverapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.