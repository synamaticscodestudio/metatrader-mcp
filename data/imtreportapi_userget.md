# UserGet (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Users ](imtreportapi_user.md "User Functions")/ UserGet | [](imtreportapi_usercreateaccount.md "UserCreateAccount") [](imtreportapi_usergetlight.md "UserGetLight") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::UserGet
Get a client record by the login.
MTAPIRES IMTReportAPI::UserGet( const UINT64 login, // Client login IMTUser* user // An object of the client record )  
---  
Parameters
login
[in] The login of a client.
user
[out] An object of the client login. The user object must first be created using the [IMTReportAPI::UserCreate](imtreportapi_usercreate.md "UserCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the data of a client with the specified login to the user object.