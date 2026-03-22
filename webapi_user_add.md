# Add (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Add | [](webapi_user_data_structure.md "Data Structure") [](webapi_user_update.md "Update") |
| --- | --- | --- |
| --- | --- |

Adding a User
This request allows to create a user account record on a trade server.
Request format
GET /api/user/add?login=login&pass_main=password&pass_investor=password&rights=rights&group=group&name=name&company=company&language=language&city=city&state=state&zipcode=zipcode& address=address&phone=phone&email=email&id=id&status=status&comment=comment&color=color&pass_phone=password&leverage=leverage&agent=account POST /api/user/add?login=login&pass-main=password&pass_investor=password&rights=rights&group=group&name=name&company=company&language=language&city=city&state=state&zipcode=zipcode& address=address&phone=phone&email=email&id=id&status=status&comment=comment&color=color&pass_phone=password&leverage=leverage&agent=account { Description of a user being created in JSON format }  
---  
Response format
{ "retcode" : "0 Done", "answer" : { description } }  
---  
Example
//--- request to the server POST /api/user/add?group=demoforex&name=JohnSmith&leverage=100 { "PassMain" : "1Ar#pqkj", "PassInvestor" : "2Ar#pqkj", "MQID" : "5CD369A9", "Company" : "Individual", "Country" : "United States", "City" : "New York" } //--- server response { "retcode" : "0 Done", "answer" : {  "Login" : "954402", "Group" : "demoforex", "CertSerialNumber" : "0", "Rights" : "2531", "MQID" : "5CD369A9", "Registration" : "1572956466", "LastAccess" : "1572956466", "LastPassChange" : "1572956466", "Name" : "JohnSmith", "Company" : "Individual", ... } }  
---  
Request Parameters
  * login — login of the user account that is being added. In case no login is specified for an account (is equal to 0), the server automatically allocates a login from the available range.
  * pass_main or PassMain — master password of the account. The password must contain four character types: lowercase letters, uppercase letters, numbers, and [special characters](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/special-characters) (#, @, ! etc.). For example, 1Ar#pqkj. The minimum password length is determined by [group](webapi_groups.md "Groups") settings, while the lowest possible value is 8 characters. The maximum length is 16 characters. This field is required. For security reasons, it is not recommended to pass the password in the request parameters — instead, pass it in an additional body as PassMain.
  * pass_investor or PassInvestor — investor password of the account. The password must contain four character types: lowercase letters, uppercase letters, numbers, and [special characters](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/special-characters) (#, @, ! etc.). For example, 1Ar#pqkj. The minimum password length is determined by [group](webapi_groups.md "Groups") settings, while the lowest possible value is 8 characters. The maximum length is 16 characters. This field is required. For security reasons, it is not recommended to pass the password in the request parameters — instead, pass it in an additional body as PassInvestor.
  * rights — user permissions. Passed using the [EnUserRights](imtuser_enum.htm#enusersrights) enumeration (sum of values of appropriate flags). To allow an account to be used in client terminals, enable the [IMTUser::USER_RIGHT_ENABLED](imtuser_enum.htm#enusersrights) right for that account.
  * group — group in which the user account should be created. This field is required.
  * name — client's name. The maximum length of a client's symbol name is 128 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length. This field is required. 
  * company — name of the client's company. The maximum length of the company name is 64 characters (including the end-of-line character. A longer string will be trimmed up to this length.
  * language — client's language. Specified in the LANGID format used in the [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) (value from Prim.lang.identifier).
  * country — the user's country of residence.
  * city — user's city of residence.
  * state — user's state (region) of residence.
  * zipcode — user's zip code.
  * address — the address of the user. The maximum address length is limited to 128 characters (including the end-of-line character). A longer string will be trimmed up to this length.
  * phone — user's phone number.
  * email — the email address of the user.
  * id — the number of a client's identity document.
  * status — client's status.
  * comment — a comment to the user The comment length is limited to 64 characters (including the end-of-line character). A longer string will be trimmed up to this length.
  * color — the color of the client's requests shown when handling the requests via the manager terminal.
  * pass_phone or PhonePassword — the user's phone password. For security reasons, it is not recommended to pass the password in the request parameters — instead, pass it in an additional body as PhonePassword.
  * leverage — the size of a client's leverage in the leverage from 1 to 500. This field is required.
  * account — the number of a user's account in an external bank. Corresponds to "Bank account" field in MetaTrader 5 Administrator terminal.
  * agent — the number of an agent account.

After the command parameters, you can specify the description of the parameters of the user account record in the JSON format. Parameters of the user record passed in the additional description overwrite parameters passed in the main body of the command. The complete description of the possible user parameters is provided in the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.
The JSON description of the user record passed when creating is the same as the description returned by the server. For example:
{ "Login" : "1023", "Group" : "demo\demoforex", "CertSerialNumber" : "0", "Rights" : "483", "Registration" : "1314700797", "LastAccess" : "1314700797", "LastIP" : "0.0.0.0", "Name" : "John Smith", ... }  
---  
  * Client description can be passed in the command parameters, in an additional body in the JSON format, or both at once. A description passed in an additional body has higher priority.

  * We strongly urge you against passing passwords in the command parameters since request addresses may be logged/cached by intermediary network devices the request passes through on its way from the client to the server. Always send passwords in an additional request body.

  
---  
Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.

  * answer — added user parameters in JSON format. The complete description of the passed client parameters is given in the ["Data structure"](webapi_user_data_structure.md "Data Structure") section.

Notes
  * In case there are no more available ranges of logins, error [3002](retcodes_clients.md "User management") is returned.
  * You can add a user on a trade server only when connecting to this trade server. When trying to add a user on a different server, error [3003](retcodes_clients.md "User management") is returned.
  * When executing the command, it checks whether the entry already exists. If an account already exists, error [3004](retcodes_clients.md "User management") is returned. The key field for comparison is the user login.
  * Before adding, the correctness of the record is checked. If the entry is incorrect, it returns the error code [3](retcodes_common.md "Common errors").
  * The error code [3006](retcodes_clients.md "User management") is returned if the password of the new client is incorrect (not complex enough or does not meet the minimum length requirement specified for the client group).
  * The error code [8](retcodes_common.md "Common errors") is returned in the following cases:

  * The [manager account](webapi_rest_authentication.htm#client_start) does not have a permission for editing accounts
  * The manager account does not have a permission for the group, where the account is being created
  * The group, to which the account is being added, does not exist on the server

Please pay attention to the [ApiData property](webapi_user_data_structure.htm#apidata) use specifics. Acceptable fields for each of the property cell (which are always 16):
  * Required fields AppID and ID containing the the application ID and the property ID.
  * One of the fields: ValueInt, ValueUInt or ValueDouble, to determine the cell value type. If several fields are specified, the presence of the fields will be checked in the following order: ValueInt, ValueUInt, ValueDouble. The type of the last one found will be used in this case. For example, to write a value of the 'unsigned' type, specify:

{ ... "ApiData": [ { "AppID": "1", "ID": "2", "ValueUInt": "3", }, ... ], ... }  
---  
Accordingly, when using *_get_* methods, take a value from the ValueUInt field of the corresponding cell within the ApiData property.