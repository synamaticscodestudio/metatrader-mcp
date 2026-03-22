# UserPasswordChange (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserPasswordChange | [](net_userpasswordcheck.md "UserPasswordCheck") [](net_useraccountget.md "UserAccountGet") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserPasswordChange
Change a client's password.
MTRetCode MT5WebAPI.UserPasswordChange( ulong login, // Login string password, // Password MTUser.EnUserPasswords type // Type of password )  
---  
Parameters
login
[in] The login of a client.
password
[in] A new password.
type
[in] The type of password to change.. Passed using the [MTUser.EnUserPasswords](imtuser_enum.htm#enuserspasswords) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The password must contain at least two of three types of characters (lower case, upper case and digits) and meet the minimum length requirements set for the [group](webapi_groups.md "Groups").
MT5WebAPI.UserPasswordChange
Changing the master password of the client.
MTRetCode MT5WebAPI.UserPasswordChange( ulong login, // Login string password // Password )  
---  
Parameters
login
[in] The login of a client.
password
[in] A new password.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The password must contain at least two of three types of characters (lower case, upper case and digits) and meet the minimum length requirements set for the [group](webapi_groups.md "Groups").