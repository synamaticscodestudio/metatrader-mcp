# UserRequestByLogins (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Users ](imtadminapi_user.md "Functions")/ UserRequestByLogins | [](imtadminapi_userrequestarray.md "UserRequestArray") [](imtadminapi_userpasswordcheck.md "UserPasswordCheck") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::UserRequestByLogins
Request accounts from the server by a list of logins.
C++
MTAPIRES IMTAdminAPI::UserRequestByLogins( const UINT64* logins, // logins const UINT logins_total, // number of logins IMTUserArray* users // array of accounts )  
---  
.NET
MTRetCode CIMTAdminAPI.UserRequestByLogins( ulong[] logins, // logins CIMTUserArray users // array of accounts )  
---  
Python
AdminAPI.UserRequestByLogins( login-list # logins )  
---  
AdminAPI.UserRequestByLoginsCSV( login-list, # logins fields # comma-separated list of required fields )  
---  
AdminAPI.UserRequestByLoginsNumPy( login-list, # logins fields # comma-separated list of required fields )  
---  
Parameters
logins
[in] Array of client logins.
logins_total
[in] Number of logins in the 'logins' array.
users
[out] An object of the accounts array. The 'users' object must be previously created using the [IMTAdminAPI::UserCreateArray](imtadminapi_usercreatearray.md "UserCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The method cannot be called from event handlers (any IMT*Sink class methods).