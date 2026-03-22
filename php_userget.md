# UserGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Clients ](php_user.md "Clients")/ UserGet | [](php_userdelete.md "UserDelete") [](php_userpasswordcheck.md "UserPasswordCheck") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::UserGet
Get information about a client by the login.
MTAPIRES MTWebAPI::UserGet( int $login, // Login MTUser  &$user // Client record )  
---  
Parameters
$login
[in] The login of a client.
&$user
[out] An object of a client account MTUser. The parameters of the client account are described in the ["Data Structure"](webapi_user_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Information about a client that can be obtained depends on access permissions of a manager account that is used for connection of the Web client. If the "Access to personal data of accounts" permission is absent", [some of the fields are not filled](webapi_preparing.htm#private_info) in the server response.