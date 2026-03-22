# UserPasswordChange (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserPasswordChange | [](imtmanagerapi_userpasswordcheck.md "UserPasswordCheck") [](imtmanagerapi_usercertcreate.md "UserCertCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserPasswordChange
Change the user's password.
C++
MTAPIRES IMTManagerAPI::UserPasswordChange( const UINT type, // Type of password const UINT64 login, // User's login LPCWSTR password // New password )  
---  
.NET
MTRetCode CIMTManagerAPI.UserPasswordChange( CIMTUser.EnUsersPasswords type, // Type of password ulong login, // User's login string password // New password )  
---  
Python
ManagerAPI.UserPasswordChange( type, # Type of password login, # User's login password # New password )  
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