# UserPasswordChange (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Clients ](php_user.md "Clients")/ UserPasswordChange | [](php_userpasswordcheck.md "UserPasswordCheck") [](php_useraccountget.md "UserAccountGet") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::UserPasswordChange
Change a client's password.
MTAPIRES MTWebAPI::UserPasswordChange( int $login, // Login string $password, // Password string $type=MTProtocolConsts::WEB_VAL_USER_PASS_MAIN // Type of password )  
---  
Parameters
$login
[in] The login of a client.
$password
[in] A new password.
$type=MTProtocolConsts::WEB_VAL_USER_PASS_MAIN
[in] The type of password to change. Passed using the following Web API constants: MTProtocolConsts::WEB_VAL_USER_PASS_MAIN - master password, MTProtocolConsts::WEB_VAL_USER_PASS_INVESTOR - investor password.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The password must contain at least two of three types of characters (lower case, upper case and digits) and meet the minimum length requirements set for the [group](webapi_groups.md "Groups").
The strings specifying the password and the password type must be passed in the UTF-8 format.