# UserAccountRequestArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserAccountRequestArray | [](imtmanagerapi_useraccountrequestbylogins.md "UserAccountRequestByLogins") [](imtmanagerapi_userexternalget.md "UserExternalGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserAccountRequestArray
Request an array of trade accounts from a server by the group name.
C++
virtual MTAPIRES IMTManagerAPI::UserAccountRequestArray( LPCWSTR group, // Client group IMTAccountArray* accounts // An array of trading accounts )  
---  
.NET
MTRetCode CIMTManagerAPI.UserAccountRequestArray( string group, // Client group CIMTAccountArray accounts // An array of trading accounts )  
---  
Python
ManagerAPI.UserAccountRequestArray( group # Client group )  
---  
Parameters
group
[in] [The name of a client group](imtcongroup_group.md "Group").
accounts
[out] An object of an array of trading accounts. The object of array of trading accounts must be created using the [IMTManagerAPI::UserCreateAccountArray](imtmanagerapi_usercreateaccountarray.md "UserCreateAccountArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.