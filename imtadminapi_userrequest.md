# UserRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserRequest | [](imtadminapi_userupdatebatcharray.md "UserUpdateBatchArray") [](imtadminapi_userrequestarray.md "UserRequestArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserRequest
Request a client record by the login from a server.
C++
MTAPIRES IMTAdminAPI::UserRequest( const UINT64 login, // Client login IMTUser* user // An object of the client record )  
---  
.NET
MTRetCode CIMTAdminAPI.UserRequest( ulong login, // Client login CIMTUser user // An object of the client record )  
---  
Python
AdminAPI.UserRequest( login # Client login )  
---  
Parameters
login
[in] The login of a client.
*user
[out] An object of the client login. The user object must first be created using the [IMTAdminAPI::UserCreate](imtadminapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the user object.