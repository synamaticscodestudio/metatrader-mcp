# UserAdd (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserAdd | [](net_user.md "Clients") [](net_userupdate.md "UserUpdate") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserAdd
Create a client account on the server.
MTRetCode MT5WebAPI.UserAdd( MTUser user, // The client account you are creating out MTUser newUser // The created client account )  
---  
Parameters
user
[in] The [MTUser](webapi_user_data_structure.md "Data Structure") object that describes the client account that you are creating.
newUser
[out] The [MTUser](webapi_user_data_structure.md "Data Structure") object that describes the created client account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
  * In case there are no more available ranges of logins, the [MT_RET_USR_LOGIN_EXHAUSTED](retcodes_clients.md "User management") error is returned.
  * You can add a user on a trade server only when connecting to this trade server. When trying to add a user on a different server, error [MT_RET_USR_LOGIN_PROHIBITED](retcodes_clients.md "User management") is returned.
  * When calling the method, a check is made whether the entry already exists. If the account already exists, the [MT_RET_USR_LOGIN_EXIST](retcodes_clients.md "User management") error is returned. The key field for comparison is the user login.
  * Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
  * The error code [MT_RET_USR_INVALID_PASSWORD](retcodes_clients.md "User management") is returned if the password of the new client is incorrect (not complex enough or does not meet the minimum length requirement specified for the client group).
  * The error code [MT_RET_ERR_PERMISSIONS](retcodes_common.md "Common errors") is returned in the following cases:

  * The [manager account](webapi_rest_authentication.htm#client_start) does not have a permission for editing accounts
  * The manager account does not have a permission for the group, where the account is being created
  * The group, to which the account is being added, does not exist on the server

Filling Data of the New Client
To add a client account, correctly fill in the MTUser structure with the following parameters
  * Login — the login of the user account that is being added. In case no login is specified for an account (is equal to 0), the server automatically allocates a login from the available range.
  * Pass_main — the master password of the account. The password must contain at least two of three types of characters (lower case, upper case and digits) and meet the minimum length requirements set for the [group](webapi_groups.md "Groups"). This field is required.
  * Pass_invsetor — the investor password of the account. The password must contain at least two of three types of characters (lower case, upper case and digits) and meet the minimum length requirements set for the [group](webapi_groups.md "Groups"). This field is required.
  * Rights — user permissions. Passed using the [EnUserRights](imtuser_enum.htm#enusersrights) enumeration (sum of values of appropriate flags).
  * Group — the group in which the user account should be created. This field is required.
  * Name — client's name. The maximum length of a client's symbol name is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length. This field is required. 
  * Company — the name of the client's company. The maximum length of the company name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
  * Language — client's language. Specified in the LANGID format used in the [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (value from Prim.lang.identifier).
  * Country — client's country of residence.
  * City — client's city of residence.
  * State — client's state (region) of residence.
  * Zipcode — client's zip code.
  * Address — the address of the client. The maximum length of the address is 128 characters (including the sign of the string end). If a string of a greater length is assigned, it will be cut to this length.
  * Phone — client's phone number.
  * Email — the email address of the client.
  * ID — the number of a client's identity document.
  * Status — client's status
  * Comment — a comment to the user. The maximum comment length is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
  * Color — the color of the client's requests shown when handling the requests via the manager terminal.
  * Pass_phone — client's phone password.
  * Leverage — the size of a client's leverage in the leverage from 1 to 500. This field is required.
  * Account — the number of a user's account in an external bank.
  * Agent — the number of an agent account.
