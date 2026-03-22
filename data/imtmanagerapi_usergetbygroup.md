# UserGetByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserGetByGroup | [](imtmanagerapi_userget.md "UserGet") [](imtmanagerapi_usergetbylogins.md "UserRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserGetByGroup
Get accounts by one or more groups.
C++
MTAPIRES IMTManagerAPI::UserGetByGroup( LPCWSTR mask, // Groups IMTUserArray* users // Array of accounts )  
---  
.NET
MTRetCode CIMTManagerAPI.UserGetByGroup( string mask, // Groups CIMTUserArray users // Array of accounts )  
---  
Python
ManagerAPI.UserGetByGroup( str mask # Groups )  
---  
ManagerAPI.UserGetByGroupCSV( mask, # Groups fields # Comma-separated list of required fields )  
---  
ManagerAPI.UserGetByGroupNumPy( mask, # Groups fields # Comma-separated list of required fields )  
---  
Parameters
mask
[in] Groups for which accounts are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" - all groups with the names beginning with 'demo', except for the group demoforex.
users
[out] An object of the accounts array. The 'users' object must be previously created using the [IMTManagerAPI::UserCreateArray](imtmanagerapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method only works if the [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.