# UserGet (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserGet | [](net_userdelete.md "UserDelete") [](net_userpasswordcheck.md "UserPasswordCheck") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserGet
Get information about a client by the login.
MTAPIRES MT5WebAPI.UserGet( ulong login, // Login out MTUser user // Client account )  
---  
Parameters
login
[in] The login of a client.
user
[out] An object of a client account MTUser. The parameters of the client account are described in the ["Data Structure"](webapi_user_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Information about a client that can be obtained depends on access permissions of a manager account that is used for connection of the Web client. If the "Access to personal data of accounts" permission is absent", [some of the fields are not filled](webapi_preparing.htm#private_info) in the server response.