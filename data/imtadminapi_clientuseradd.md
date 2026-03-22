# ClientUserAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientUserAdd | [](imtadminapi_clientrequesthistory.md "ClientRequestHistory") [](imtadminapi_clientuseraddbatch.md "ClientUserAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientUserAdd
Bind a trading account to a client.
C++
MTAPIRES IMTAdminAPI::ClientUserAdd( const UINT64 client_id, // identifier const UINT64 login // account number )  
---  
.NET
MTRetCode CIMTAdminAPI.ClientUserAdd( ulong client_id, // identifier ulong login // account number )  
---  
Python
AdminAPI.ClientUserAdd( int client_id, # identifier int login # account number )  
---  
Parameters
client_id
[in] The ID of the client ([IMTClient::RecordID](imtclient_recordid.md "RecordID")), to which the account should be linked.
login
[in] The login of the account ([IMTUser::Login](imtuser_login.md "Login")), which should be linked to the client.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method does not create a trading account. It binds an existing account to a client.
When binding, [account data are not copied](https://support.metaquotes.net/en/docs/mt5/platform/administration/clients#binding) to the client record.