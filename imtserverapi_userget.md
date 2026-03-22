# UserGet (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserGet | [](imtserverapi_usertotal.md "UserTotal") [](imtserverapi_usergroup.md "UserGroup") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserGet
Get a client record by the login.
MTAPIRES IMTServerAPI::UserGet( const UINT64 login, // Client login IMTUser* user // An object of the client record )  
---  
Parameters
login
[in] The login of a client.
user
[out] An object of the client login. The user object must first be created using the [IMTServerAPI::UserCreate](imtserverapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the user object.