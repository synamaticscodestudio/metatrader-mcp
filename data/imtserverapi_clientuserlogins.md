# ClientUserLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientUserLogins | [](imtserverapi_clientuserdelete.md "ClientUserDelete") [](imtserverapi_documentcreate.md "DocumentCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientUserLogins
Get the list of client's trading accounts.
MTAPIRES IMTServerAPI::ClientUserLogins( const UINT64 client_id, // ID UINT64*& logins, // Array of accounts UINT& logins_total // Number of accounts )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
logins
[out] Array with account logins. The login is equal to [IMTUser::Login](imtuser_login.md "Login").
logins_total
[out] The number of accounts in the 'logins' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method allocates and fills an array of accounts. A pointer to the passed block is placed to the 'logins' parameter. After use, the array placed in the 'logins' variable must be released using the [IMTServerAPI::Free](imtserverapi_free.md "Free") Server API method.