# ExternalAccountDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ ExternalAccountDelete | [](imtuser_externalaccountupdate.md "ExternalAccountUpdate") [](imtuser_externalaccountclear.md "ExternalAccountClear") |
| --- | --- | --- |
| --- | --- |

IMTUser::ExternalAccountDelete
Deletes the number of a trading account in the external trading system by position.
C++
MTAPIRES IMTUser::ExternalAccountDelete( const UINT pos // Position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.ExternalAccountDelete( uint pos // Position )  
---  
Parameters
pos
[in] Account position starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.