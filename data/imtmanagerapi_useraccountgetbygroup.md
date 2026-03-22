# UserAccountGetByGroup (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserAccountGetByGroup | [](imtmanagerapi_useraccountget.md "UserAccountGet") [](imtmanagerapi_useraccountgetbylogins.md "UserAccountGetByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserAccountGetByGroup
Get trading accounts for one or several groups.
C++
MTAPIRES IMTManagerAPI::UserAccountGetByGroup( LPCWSTR mask, // Groups IMTAccountArray* accounts // Array of accounts )  
---  
.NET
MTRetCode CIMTManagerAPI.UserAccountGetByGroup( string mask, // Groups CIMTAccountArray accounts // Array of accounts )  
---  
Python
ManagerAPI.UserAccountGetByGroup( str mask # Groups )  
---  
Parameters
mask
[in] Groups for which accounts are requested. You can specify one group, several groups (comma separated) or a group mask. The mask is specified using characters "*" (any value) and "!" (exception). For example: "demo*,!demoforex" indicates all groups with the names beginning with 'demo', except for the group demoforex.
accounts
[out] Array of trading accounts. The 'accounts' object must first be created using the [IMTManagerAPI::UserCreateAccountArray](imtmanagerapi_usercreateaccountarray.md "UserCreateAccountArray") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method only works if the [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") PUMP_MODE_USERS, PUMP_MODE_ORDERS and PUMP_MODE_POSITIONS were specified when connecting.