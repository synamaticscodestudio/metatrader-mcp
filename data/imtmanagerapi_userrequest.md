# UserRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserRequest | [](imtmanagerapi_usergetbylogins.md "UserRequestByLogins") [](imtmanagerapi_userrequestarray.md "UserRequestArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserRequest
Request a client record by the login from a server.
C++
MTAPIRES IMTManagerAPI::UserRequest( const UINT64 login, // Client login IMTUser* user  // An object of the client record )  
---  
.NET
MTRetCode CIMTManagerAPI.UserRequest( ulong  login, // Client login CIMTUser obj // An object of the client record )  
---  
Python
ManagerAPI.UserRequest( login # Client login )  
---  
Parameters
login
[in] The login of a client.
*user
[out] An object of the client login. The user object must first be created using the [IMTManagerAPI::UserCreate](imtmanagerapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the user object.
This method cannot be called from event handlers (any methods of IMT*Sink classes).