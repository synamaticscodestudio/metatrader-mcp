# UserExternalSync (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserExternalSync | [](imtadminapi_userexternalrequest.md "UserExternalRequest") [](imtadminapi_userlogins.md "UserLogins") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserExternalSync
Synchronizing client's trading status with an external trading system. When calling this method, [IMTGatewaySink::HookGatewayAccountRequest](imtgatewaysink_hookgatewayaccountrequest.md "HookGatewayAccountRequest") hook is called in Gateway API. MetaTrader 5 client's trading status will be brought in line with an external trading system when this method is executed in case the gateway developer has provided such a possibility.
C++
MTAPIRES IMTAdminAPI::UserExternalSync( const UINT64 login, // Login const UINT64 gateway_id, // Gateway ID LPCWSTR account_id, // External system account UINT sync_mode // Synchronization mode )  
---  
.NET
MTRetCode CIMTAdminAPI.UserExternalSync( ulong login, // Login ulong gateway_id, // Gateway ID string account_id, // External system account EnExternalSyncModes sync_mode // Synchronization mode )  
---  
Python
AdminAPI.UserExternalSync( login, # Login gateway_id, # Gateway ID account_id, # External system account sync_mode # Synchronization mode )  
---  
Parameters
login
[in] Login of the client, for whom synchronization is performed.
gateway_id
[in] [Gateway ID](imtcongateway_id.md "ID"). Gateway ID is associated with an account number in an external system.
account_id
[in] Client's account in an external system.
sync_mode
[out] Synchronization mode. Transferred using [IMTAdminAPI::EnExternalSyncModes](imtadminapi_user_enum.htm#enexternalsyncmodes) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method works only if trading status synchronization is provided at the gateway used by the client.
Correcting operations are created as a result of trading data synchronization. These operations are displayed in the client's trading history.
No matter what data is sent by the gateway in response to the method call (orders, positions, balance), the server will apply the changes according to synchronization mode specified in sync_mode parameter.