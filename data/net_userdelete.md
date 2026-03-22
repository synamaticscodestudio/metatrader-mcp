# UserDelete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserDelete | [](net_userupdate.md "UserUpdate") [](net_userget.md "UserGet") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserDelete
Delete a client account on the server.
MTRetCode MT5WebAPI.UserDelete( ulong login // Login )  
---  
Parameters
login
[in] The login of an account to be deleted.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
  * A user account can be deleted only when connecting to the same trade server where the account is located. If an account with the specified login is not found, code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
  * Accounts that belong to manager and administrator groups cannot be deleted.
