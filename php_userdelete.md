# UserDelete (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Clients ](php_user.md "Clients")/ UserDelete | [](php_userupdate.md "UserUpdate") [](php_userget.md "UserGet") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::UserDelete
Delete a client account on the server.
MTAPIRES MTWebAPI::UserDelete( int $login // Login )  
---  
Parameters
$login
[in] The login of an account to be deleted.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
  * A user account can be deleted only when connecting to the same trade server where the account is located. If an account with the specified login is not found, code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
  * Accounts that belong to manager and administrator groups cannot be deleted.
