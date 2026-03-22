# UserPasswordChange (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserPasswordChange | [](imtadminapi_userpasswordcheck.md "UserPasswordCheck") [](imtadminapi_usercertcreate.md "UserCertCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserPasswordChange
Change the user's password.
C++
MTAPIRES IMTAdminAPI::UserPasswordChange( const UINT type, // Type of password const UINT64 login, // User's login LPCWSTR password // New password )  
---  
.NET
MTRetCode CIMTAdminAPI.UserPasswordChange( EnUsersPasswords type, // Type of password ulong  login, // User's login string password // New password )  
---  
Python
AdminAPI.UserPasswordChange( type, # Type of password login, # User's login password # New password )  
---  
Parameters
type
[in] The type of a password to change is specified using the [IMTUser::EnUsersPasswords](imtuser_enum.htm#enuserspasswords) enumeration.
login
[in] The login of a user whose password should be changed.
password
[in] A new password. The password must contain four character types: lowercase letters, uppercase letters, numbers, and [special characters](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/special-characters) (#, @, ! etc.). For example, 1Ar#pqkj. The minimum password length is determined by group settings ([IMTConGroup::AuthPasswordMin](imtcongroup_authpasswordmin.md "AuthPasswordMin")), while the lowest possible value is 8 characters. The maximum length is 16 characters.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.