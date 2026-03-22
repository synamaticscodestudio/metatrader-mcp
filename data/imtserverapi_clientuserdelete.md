# ClientUserDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Clients ](serverapi_clients.md "Clients")/ ClientUserDelete | [](imtserverapi_clientuseradd.md "ClientUserAdd") [](imtserverapi_clientuserlogins.md "ClientUserLogins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ClientUserDelete
Unbind a trading account from a client.
MTAPIRES IMTServerAPI::ClientUserDelete( const UINT64 client_id, // Identifier const UINT64 login // Account number )  
---  
Parameters
client_id
[in] The ID of the client ([IMTClient::RecordID](imtclient_recordid.md "RecordID")), from which the account should be unbound.
login
[in] The login of the account ([IMTUser::Login](imtuser_login.md "Login")), which is unbound from the client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method does not delete the trading account. It unbinds the account from the client.