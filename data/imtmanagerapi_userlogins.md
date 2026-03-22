# UserLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserLogins | [](imtmanagerapi_usergroup.md "UserGroup") [](imtmanagerapi_userpasswordcheck.md "UserPasswordCheck") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserLogins
Returns an array of logins of the clients who are included in the specified group.
C++
MTAPIRES IMTManagerAPI::UserLogins( LPCWSTR group, // Group name UINT64*& logins, // An array of client logins UINT& logins_total // The number of logins )  
---  
.NET
ulong[] CIMTManagerAPI.UserLogins( string group, // Group name out MTRetCode res // Response code )  
---  
Python
ManagerAPI.UserLogins( group # Group name )  
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
The UserLogins method allocates and fills an array of logins that belong to the passed group, a pointer to the passed block is placed to the logins parameter After using, the array placed in the logins variable must be released using the [IMTManagerAPI::Free()](imtmanagerapi_free.md "Free") method of the Manager API.
The method is valid only if the [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.