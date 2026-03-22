# UserGroup (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserGroup | [](imtserverapi_userget.md "UserGet") [](imtserverapi_userlogins.md "UserLogins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserGroup
Get the group of a client by the login.
MTAPIRES IMTServerAPI::UserGroup( const UINT64 login, // Client login MTAPISTR& group // Client group )  
---  
Parameters
login
[in] The login of a client.
group
[out] The name of a user group to which the client belongs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.