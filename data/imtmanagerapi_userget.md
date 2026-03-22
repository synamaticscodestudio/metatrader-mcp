# UserGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserGet | [](imtmanagerapi_usertotal.md "UserTotal") [](imtmanagerapi_usergetbygroup.md "UserGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserGet
Get a user by the login.
C++
MTAPIRES IMTManagerAPI::UserGet( const UINT64 login, // Client login IMTUser* user // An object of the client record )  
---  
.NET
MTRetCode CIMTManagerAPI.UserGet( ulong login, // Client login CIMTUser user // An object of the client record )  
---  
Python
ManagerAPI.UserGet( int login # Client login )  
---  
Parameters
login
[in] The login of a client.
user
[out] An object of the client login. The user object must first be created using the [IMTManagerAPI::UserCreate](imtmanagerapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the user object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.