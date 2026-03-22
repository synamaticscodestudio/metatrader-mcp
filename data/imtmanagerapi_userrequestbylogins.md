# UserRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserRequestByLogins | [](imtmanagerapi_userrequestarray.md "UserRequestArray") [](imtmanagerapi_usergroup.md "UserGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserRequestByLogins
Request accounts from the server by a list of logins.
C++
MTAPIRES IMTManagerAPI::UserRequestByLogins( const UINT64* logins, // logins const UINT logins_total, // number of logins IMTUserArray* users // array of accounts )  
---  
.NET
MTRetCode CIMTManagerAPI.UserRequestByLogins( ulong[] logins, // logins CIMTUserArray users // array of accounts )  
---  
Python
ManagerAPI.UserRequestByLogins( logins # logins )  
---  
ManagerAPI.UserRequestByLoginsCSV( logins, # logins fields # comma-separated list of required fields )  
---  
ManagerAPI.UserRequestByLoginsNumPy( logins, # logins fields # comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
users
[out] An object of the accounts array. The 'users' object must be previously created using the [IMTManagerAPI::UserCreateArray](imtmanagerapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).