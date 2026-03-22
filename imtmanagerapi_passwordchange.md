# PasswordChange (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Common Functions ](imtmanagerapi_common.md "Common Functions")/ PasswordChange | [](imtmanagerapi_licensecheck.md "LicenseCheck") [](imtmanagerapi_connection.md "Connecting to the Server") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::PasswordChange
Change password of an account that is used to [connect](imtmanagerapi_connect.md "Connect") the application to the server.
C++
MTAPIRES IMTManagerAPI::PasswordChange( const UINT type, // Type of password LPCWSTR password // New password )  
---  
.NET
MTRetCode CIMTManagerAPI.PasswordChange( uint type, // Type of password string password // New password )  
---  
Python
ManagerAPI.PasswordChange( type, # Type of password password # New password )  
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