# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Users ](reference_user.md "Users") / [ IMTUser ](imtuser.md "IMTUser")/ Assign | [](imtuser_release.md "Release") [](imtuser_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTUser::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTUser::Assign( const IMTUser* user // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTUser.Assign( CIMTUser user // Source object )  
---  
Parameters
user
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.