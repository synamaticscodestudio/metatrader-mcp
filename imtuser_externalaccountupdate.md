# ExternalAccountUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ ExternalAccountUpdate | [](imtuser_externalaccountadd.md "ExternalAccountAdd") [](imtuser_externalaccountdelete.md "ExternalAccountDelete") |
| --- | --- | --- |
| --- | --- |

IMTUser::ExternalAccountUpdate
Updates the number of a client's trading account in the external system, with which the platform interacts via the specified [gateway](config_gateway.md "Gateways").
C++
MTAPIRES IMTUser::ExternalAccountUpdate( const UINT pos, // Position const UINT64 gateway_id, // Gateway ID LPCWSTR account // Account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ExternalAccountUpdate( uint pos, // Position ulong gateway_id, // Gateway ID string account // Account )  
---  
Parameters
pos
[in] Account position starting with 0.
gateway_id
[in] The identifier of the gateway with which the account in an external system is associated.
account
[in] An account in the external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The total length of the accounts and IDs stored for an account is limited to 128 characters (including the end-of-line character). If the total length is exceeded when you add or change the account state, the error code [MT_RET_ERR_DATA](retcodes_common.md "Common errors") will be returned.