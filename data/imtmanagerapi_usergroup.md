# UserGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserGroup | [](imtmanagerapi_userrequestbylogins.md "UserRequestByLogins") [](imtmanagerapi_userlogins.md "UserLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserGroup
Get the group of a client by the login.
C++
MTAPIRES IMTManagerAPI::UserGroup( const UINT64 login, // Client login MTAPISTR& group // Client group )  
---  
.NET
MTRetCode CIMTManagerAPI.UserGroup( ulong login, // Client login out string group // Client group )  
---  
Python
ManagerAPI.UserGroup( login # Client login )  
---  
Parameters
login
[in] The login of a client.
group
[out] The name of a user group to which the client belongs.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.