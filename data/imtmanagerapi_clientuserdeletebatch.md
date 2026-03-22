# ClientUserDeleteBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientUserDeleteBatch | [](imtmanagerapi_clientuserdelete.md "ClientUserDelete") [](imtmanagerapi_clientuserrequest.md "ClientUserRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientUserDeleteBatch
Unbind a batch of trading accounts from a client.
C++
MTAPIRES IMTManagerAPI::ClientUserDeleteBatch( const UINT64 client_id, // identifier const UINT64* logins, // array of accounts const UINT logins_total, // number of accounts MTAPIRES* results // results )  
---  
.NET
MTRetCode CIMTManagerAPI.ClientUserDeleteBatch( ulong client_id, // identifier ulong[]  logins, // array of accounts MTRetCode[] retcodes // results )  
---  
Python
ManagerAPI.ClientUserDeleteBatch( int client_id, # identifier list[int]  logins # array of accounts )  
---  
Parameters
client_id
[in] The ID of the client ([IMTClient::RecordID](imtclient_recordid.md "RecordID")), from which the accounts are unbound.
logins
[in] The array of account logins ([IMTUser::Login](imtuser_login.md "Login")), which are unbound from the client.
logins_total
[in] Number of accounts in the logins array.
results
[out] An array with account unbinding results. The size of the 'results' array must not be less than that of 'logins'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all specified accounts have been unbound. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the clients have been unbound. Analyze the 'results' array for more details of the execution results. The result of unbinding of each account from the 'logins' array is added to 'results'. The index of a result corresponds to the index of an account in the source array.
Note
The request does not delete trading accounts. It only unbinds accounts from the client.