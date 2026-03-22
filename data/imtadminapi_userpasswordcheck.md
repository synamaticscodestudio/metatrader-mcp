# UserPasswordCheck (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserPasswordCheck | [](imtadminapi_userrequestbylogins.md "UserRequestByLogins") [](imtadminapi_userpasswordchange.md "UserPasswordChange") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserPasswordCheck
Check the user's password.
C++
MTAPIRES IMTAdminAPI::UserPasswordCheck( const UINT type, // Type of password const UINT64 login, // User's login LPCWSTR password // User's password )  
---  
.NET
MTRetCode CIMTAdminAPI.UserPasswordCheck( EnUsersPasswords type, // Type of password ulong login, // User's login string password // User's password )  
---  
Python
AdminAPI.UserPasswordCheck( type, # Type of password login, # User's login password # User's password )  
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