# UserPasswordCheck (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserPasswordCheck | [](net_userget.md "UserGet") [](net_userpasswordchange.md "UserPasswordChange") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserPasswordCheck
Check a client's password.
MTRetCode MT5WebAPI.UserPasswordCheck( ulong login, // Login string password, // Password MTUser.EnUserPasswords type // Type of password )  
---  
Parameters
login
[in] The login of a client.
password
[in] The password to check.
type
[in] The type of password to check. Passed using the [MTUser.EnUserPasswords](imtuser_enum.htm#enuserspasswords) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code. For example, code [MT_RET_USR_INVALID_PASSWORD](retcodes_clients.md "User management") indicates that the password is incorrect.
MT5WebAPI.UserPasswordCheck
Checking the master password of the client.
MTRetCode MT5WebAPI.UserPasswordCheck( ulong login, // Login string password // Password )  
---  
Parameters
login
[in] The login of a client.
password
[in] The password to check.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code. For example, code [MT_RET_USR_INVALID_PASSWORD](retcodes_clients.md "User management") indicates that the password is incorrect.