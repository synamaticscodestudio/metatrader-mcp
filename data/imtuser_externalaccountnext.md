# ExternalAccountNext (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ ExternalAccountNext | [](imtuser_externalaccounttotal.md "ExternalAccountTotal") [](imtuser_externalaccountget.md "ExternalAccountGet") |
| --- | --- | --- |
| --- | --- |

IMTUser::ExternalAccountNext
Gets the number of a client's trading account in the external system and the ID of the gateway, through which the platform interacts with the system.
C++
MTAPIRES IMTUser::ExternalAccountNext( const UINT pos, // Position UINT64& gateway_id, // Gateway ID MTAPISTR& account // Account )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ExternalAccountNext( uint pos, // Position out ulong gateway_id, // Gateway ID out string account // Account )  
---  
Parameters
pos
[in] Account position starting with 0.
gateway_id
[out] The identifier of the gateway with which the account in an external system is associated.
account
[out] An account in the external trading system.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.