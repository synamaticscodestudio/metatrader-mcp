# UserPasswordCheck (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Clients ](php_user.md "Clients")/ UserPasswordCheck | [](php_userget.md "UserGet") [](php_userpasswordchange.md "UserPasswordChange") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::UserPasswordCheck
Check a client's password.
MTAPIRES MTWebAPI::UserPasswordCheck( int $login, // Login string $password, // Password string $type=MTProtocolConsts::WEB_VAL_USER_PASS_MAIN // Type of password )  
---  
Parameters
$login
[in] The login of a client.
$password
[in] The password to check.
$type=MTProtocolConsts::WEB_VAL_USER_PASS_MAIN
[in] The type of password to check. Passed using the following Web API constants: MTProtocolConsts::WEB_VAL_USER_PASS_MAIN - master password, MTProtocolConsts::WEB_VAL_USER_PASS_INVESTOR - investor password.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code. For example, code [MT_RET_USR_INVALID_PASSWORD](retcodes_clients.md "User management") indicates that the password is incorrect.
Note
The strings specifying the password and the password type must be passed in the UTF-8 format.