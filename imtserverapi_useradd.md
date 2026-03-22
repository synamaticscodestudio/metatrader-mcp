# UserAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserAdd | [](imtserverapi_userunsubscribe.md "UserUnsubscribe") [](imtserverapi_userdelete.md "UserDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserAdd
Add a client record.
MTAPIRES IMTServerAPI::UserAdd( IMTUser* user, // An object of the client record LPCWSTR master_pass, // The master password LPCWSTR investor_pass // The investor password )  
---  
Parameters
user
[in][out] An object of the client record.
master_pass
[in] The master password of an account. The password must contain four character types: lowercase letters, uppercase letters, numbers, and [special characters](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/special-characters) (#, @, ! etc.). For example, 1Ar#pqkj. The minimum password length is determined by group settings ([IMTConGroup::AuthPasswordMin](imtcongroup_authpasswordmin.md "AuthPasswordMin")), while the lowest possible value is 8 characters. The maximum length is 16 characters.
investor_pass
[in] The investor password of an account. The password must contain four character types: lowercase letters, uppercase letters, numbers, and [special characters](https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/term-collections/special-characters) (#, @, ! etc.). For example, 1Ar#pqkj. The minimum password length is determined by group settings ([IMTConGroup::AuthPasswordMin](imtcongroup_authpasswordmin.md "AuthPasswordMin")), while the lowest possible value is 8 characters. The maximum length is 16 characters.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
In case no login is specified for a record (is equal to 0), the server will automatically allocate a login from the available range and will assign it to the user record. In case there are no more available ranges of logins, the [MT_RET_USR_LOGIN_EXHAUSTED](retcodes_clients.md "User management") error is returned.
The following parameters must be filled in the user record you are adding: [IMTUser::Group](imtuser_group.md "Group") and [IMTUser::Leverage](imtuser_leverage.md "Leverage"), as well as [IMTUser::FirstName](imtuser_firstname.md "FirstName") or [IMTUser::LastName](imtuser_lastname.md "LastName"). To allow an account to be used in client terminals, enable the [IMTUser::USER_RIGHT_ENABLED](imtuser_enum.htm#enusersrights) right for that account.
When calling the method, a check is made whether the entry already exists. If the account already exists, the [MT_RET_USR_LOGIN_EXIST](retcodes_clients.md "User management") error is returned. A key field for comparison is the user login [IMTUser::Login](imtuser_login.md "Login").
A user can be added on a trade server only from the plugins that run in the same trade server. For all other plugins the response code [MT_RET_USR_LOGIN_PROHIBITED](retcodes_clients.md "User management") will be returned.
Before adding, the correctness of the record is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.