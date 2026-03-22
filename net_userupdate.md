# UserUpdate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Clients ](net_user.md "Clients")/ UserUpdate | [](net_useradd.md "UserAdd") [](net_userdelete.md "UserDelete") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.UserUpdate
Change a client account on the server.
MTRetCode MT5WebAPI.UserUpdate( MTUser user, // Modifications to a client account out MTUser newUser // Modified client account )  
---  
Parameters
user
[in] An object of the client account [MTUser](webapi_user_data_structure.md "Data Structure") filled in with the user data that you need to change.
newUser
[out] The [MTUser](webapi_user_data_structure.md "Data Structure") object that describes the updated client account.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
  * A user account can be updated only when you are connected to the same trade server where the account is located. If an account with the specified login is not found, code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.

Filling Updated User Data
To update a client account, correctly fill in the MTConUser structure with the following parameters:
  * Login — the login of the user account that is being added. In case no login is specified for an account (is equal to 0), the server automatically allocates a login from the available range.
  * Rights — user permissions. Passed using the [EnUserRights](imtuser_enum.htm#enusersrights) enumeration (sum of values of appropriate flags).
  * Group — the group in which the user account should be created. This field is required.
  * Name — client's name. The maximum length of a client's symbol name is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length. This field is required. 
  * Company — the name of the client's company. The maximum length of the company name is 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.
  * Language — client's language. Specified in the LANGID format used in the [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) systems (a value from Prim.lang.identifier).
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
  * Leverage — the size of a client's leverage in the leverage from 1 to 500.
  * Account — the number of a user's account in an external bank.
  * Agent — the number of an agent account.
