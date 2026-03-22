# ClientUserAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientUserAdd | [](imtserverapi_clientidsbymanager.md "ClientIdsByManager") [](imtserverapi_clientuserdelete.md "ClientUserDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientUserAdd
Bind a trading account to a client.
MTAPIRES IMTServerAPI::ClientUserAdd( const UINT64 client_id, // Identifier const UINT64 login // Account number )  
---  
Parameters
client_id
[in] The ID of the client ([IMTClient::RecordID](imtclient_recordid.md "RecordID")), to which the account should be linked.
login
[in] The login of the account ([IMTUser::Login](imtuser_login.md "Login")), which should be linked to the client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method does not create a trading account. It binds an existing account to a client.
When binding, [account data](https://support.metaquotes.net/en/docs/mt5/platform/administration/clients#binding) are not copied to the client record.