# ClientUserRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Clients ](imtmanagerapi_clients.md "Clients")/ ClientUserRequest | [](imtmanagerapi_clientuserdeletebatch.md "ClientUserDeleteBatch") [](imtmanagerapi_documentcreate.md "DocumentCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::ClientUserRequest
Get the list of client's trading accounts.
C++
MTAPIRES IMTManagerAPI::ClientUserRequest( const UINT64 client_id, // identifier UINT64*& logins, // array of accounts UINT& logins_total // number of accounts )  
---  
.NET
MTRetCode CIMTManagerAPI.ClientUserRequest( ulong client_id, // identifier ulong[] logins // array of accounts )  
---  
Python
ManagerAPI.ClientUserRequest( int client_id # identifier )  
---  
Parameters
client_id
[in] Client identifier ([IMTClient::RecordID](imtclient_recordid.md "RecordID")).
logins
[out] Array with account logins. The login is equal to [IMTUser::Login](imtuser_login.md "Login").
logins_total
[out] The number of accounts in the 'logins' array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The method allocates and fills an array of accounts. A pointer to the passed block is placed to the 'logins' parameter. After use, the array placed in the 'logins' variable must be released using the [IMTManagerAPI::Free](imtmanagerapi_free.md "Free") method.
The method cannot be called from event handlers (any IMT*Sink class methods).