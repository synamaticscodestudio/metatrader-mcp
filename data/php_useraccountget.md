# UserAccountGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Clients ](php_user.md "Clients")/ UserAccountGet | [](php_userpasswordchange.md "UserPasswordChange") [](php_userlogins.md "UserLogins") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::UserAccountGet
Get the status of a client's trade account.
MTAPIRES MTWebAPI::UserAccountGet( int $login, // Login MTAccount &$account // Trade account state )  
---  
Parameters
$login
[in] The login of a client.
&$account
[out] The MTAccount structure that describes the state of a trading account. The structure parameters are described in section ["Data Structure"](webapi_user_data_structure.htm#account).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The state of a trade account can be received only in case it has open orders or positions or a trade activity has been detected at the account after the last server restart.