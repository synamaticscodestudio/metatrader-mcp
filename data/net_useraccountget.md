# UserAccountGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserAccountGet | [](net_userpasswordchange.md "UserPasswordChange") [](net_userlogins.md "UserLogins") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserAccountGet
Get the status of a client's trade account.
MTRetCode MT5WebAPI.UserAccountGet( ulong login, // Login out MTAccount account // Trade account status )  
---  
Parameters
login
[in] The login of a client.
account
[out] The MTAccount structure that describes the state of a trading account. The structure parameters are described in the ["Trade Account Parameters"](webapi_user_data_structure.htm#account) section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The state of a trade account can be received only in case it has open orders or positions or a trade activity has been detected at the account after the last server restart.