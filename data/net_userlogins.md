# UserLogins (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserLogins | [](net_useraccountget.md "UserAccountGet") [](net_order.md "Orders") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserLogins
Returns a list of logins of the clients who are included in the specified group.
MTRetCode MT5WebAPI.UserLogins( string group, // Group name out List<int> logins // A list of client logins )  
---  
Parameters
group
[in] The name of a group of users. The entire name of the group must be specified including the path. For example, demo\demoforex.
logins
[out] A list of client logins.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.