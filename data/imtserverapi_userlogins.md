# UserLogins (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Users ](serverapi_users.md "Clients")/ UserLogins | [](imtserverapi_usergroup.md "UserGroup") [](imtserverapi_userpasswordcheck.md "UserPasswordCheck") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::UserLogins
Returns an array of logins of the clients who are included in the specified group.
MTAPIRES IMTServerAPI::UserLogins( LPCWSTR group, // Group name UINT64*& logins, // An array of client logins UINT& logins_total // The number of logins )  
---  
Parameters
group
[in] The name of a group of users. The entire name of the group must be specified including the path. For example, demo\demoforex. To get the name of a group, use the [IMTConGorup::Group](imtcongroup_group.md "Group").
logins
[out] An array of client logins.
logins_total
[out] The number of logins in the logins array.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The UserLogins function allocates and fills an array of logins that belong to the passed group, a pointer to the passed block is placed to the logins parameter. After using, the array placed in the logins variable must be released using the [IMTServerAPI::Free()](imtserverapi_free.md "Free") method of the Server API.
When requesting logins, it is recommended to check whether the specified group belongs to the same trade server, the request is sent from. To do it, compare the values of [IMTConGroup::Server](imtcongroup_server.md "Server") and [MTServerInfo::server_id](mtserverinfo.md "MTServerInfo").