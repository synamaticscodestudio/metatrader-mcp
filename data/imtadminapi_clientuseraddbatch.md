# ClientUserAddBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Clients ](imtadminapi_clients.md "Clients")/ ClientUserAddBatch | [](imtadminapi_clientuseradd.md "ClientUserAdd") [](imtadminapi_clientuserdelete.md "ClientUserDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ClientUserAddBatch
Bind a batch of trading accounts to a client.
C++
MTAPIRES IMTAdminAPI::ClientUserAddBatch( const UINT64 client_id, // identifier const UINT64* logins, // array of accounts const UINT logins_total, // number of accounts MTAPIRES* results // results )  
---  
.NET
MTRetCode CIMTAdminAPI.ClientUserAddBatch( ulong client_id, // identifier ulong[] logins, // array of accounts MTRetCode[] retcodes // results )  
---  
Python
AdminAPI.ClientUserAddBatch( int client_id, # identifier list[int] logins # array of accounts )  
---  
Parameters
client_id
[in] The ID of the client ([IMTClient::RecordID](imtclient_recordid.md "RecordID")), to which the accounts should be linked.
logins
[in] The array of account logins ([IMTUser::Login](imtuser_login.md "Login")), which should be bound to the client.
logins_total
[in] Number of accounts in the logins array.
results
[out] An array with account binding results. The size of the 'results' array must not be less than that of 'logins'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified accounts have been bound. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the clients have been bound. Analyze the 'results' array for more details of the execution results. The result of binding of each account from the 'logins' array is added to 'results'. The index of a result corresponds to the index of an account in the source array.
Note
The method does not create trading accounts. It only binds existing accounts to a client.
When binding, [account data are not copied](https://support.metaquotes.net/en/docs/mt5/platform/administration/clients#binding) to the client record.