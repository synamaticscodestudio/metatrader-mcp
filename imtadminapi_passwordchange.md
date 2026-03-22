# PasswordChange (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Common Functions ](imtadminapi_common.md "Common Functions")/ PasswordChange | [](imtadminapi_licensecheck.md "LicenseCheck") [](imtadminapi_connection.md "Connecting to the Server") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PasswordChange
Change password of an account that is used to [connect](imtadminapi_connect.md "Connect") the application to the server.
C++
MTAPIRES IMTAdminAPI::PasswordChange( const UINT type, // Type of password LPCWSTR password // New password )  
---  
.NET
MTRetCode CIMTAdminAPI.PasswordChange( uint type, // Type of password string password // New password )  
---  
Python
AdminAPI.PasswordChange( type, # Type of password password # New password )  
---  
Parameters
type
[in] The type of a password to change is specified using the [IMTUSer::EnUsersPasswords](imtuser_enum.htm#enuserspasswords) enumeration.
password
[in] A new password.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The password must contain at least two of three types of characters (lower case, upper case and digits) and meet the minimum length requirements set for the group ([IMTConGroup::AuthPasswordMin](imtcongroup_authpasswordmin.md "AuthPasswordMin")).