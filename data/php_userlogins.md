# UserLogins (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Clients ](php_user.md "Clients")/ UserLogins | [](php_useraccountget.md "UserAccountGet") [](php_order.md "Orders") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::UserLogins
Returns an array of logins of the clients who are included in the specified group.
MTAPIRES MTWebAPI::UserLogins( string $group, // Group name array(int)  &$logins // An array of client logins )  
---  
Parameters
group
[in] The name of a group of users. The entire name of the group must be specified including the path. For example, demo\demoforex.
logins
[out] An array of client logins.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.