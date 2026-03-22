# ExternalAccountAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ ExternalAccountAdd | [](imtuser_apidataclearall.md "APIDataClearAll") [](imtuser_externalaccountupdate.md "ExternalAccountUpdate") |
| --- | --- | --- |
| --- | --- |

IMTUser::ExternalAccountAdd
Add the number of a client's trading account in the external system, with which the platform interacts via the specified [gateway](config_gateway.md "Gateways").
C++
MTAPIRES IMTUser::ExternalAccountAdd( const UINT64 gateway_id, // Gateway ID LPCWSTR account // Account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ExternalAccountAdd( ulong gateway_id, // Gateway ID string account // Account )  
---  
Parameters
gateway_id
[in] The identifier of the gateway with which the account in an external system is associated.
account
[in] An account in the external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
The total length of the accounts and IDs stored for an account is limited to 128 characters (including the end-of-line character). The maximum length of each account is limited to 32 characters (including the end-of-line character). If the total length is exceeded when you add or change the account state, the error code [MT_RET_ERR_DATA](retcodes_common.md "Common errors") will be returned.