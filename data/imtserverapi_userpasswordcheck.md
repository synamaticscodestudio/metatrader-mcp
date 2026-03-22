# UserPasswordCheck (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserPasswordCheck | [](imtserverapi_userlogins.md "UserLogins") [](imtserverapi_userpasswordchange.md "UserPasswordChange") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserPasswordCheck
Check the user's password.
MTAPIRES IMTServerAPI::UserPasswordCheck( const UINT type, // Type of password const UINT64 login, // User's login LPCWSTR password // User's password )  
---  
Parameters
type
[in] The type of a password to check is specified using the [IMTUser::EnUsersPasswords](imtuser_enum.htm#enuserspasswords) enumeration.
login
[in] The login of a user whose password should be checked.
password
[in] A password to check.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.