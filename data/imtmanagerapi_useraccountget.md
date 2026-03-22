# UserAccountGet (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserAccountGet | [](imtmanagerapi_useraccountunsubscribe.md "UserAccountUnsubscribe") [](imtmanagerapi_useraccountgetbygroup.md "UserAccountGetByGroup") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserAccountGet
Get client trading account by a login.
C++
MTAPIRES IMTManagerAPI::UserAccountGet( const UINT64 login, // Client login IMTAccount* account // An object of a trading account )  
---  
.NET
MTRetCode CIMTManagerAPI.UserAccountGet( ulong login, // Client login CIMTAccount obj // An object of a trading account )  
---  
Python
ManagerAPI.UserAccountGet( login # Client login )  
---  
Parameters
login
[in] The login of a client.
account
[out] An object of a client trading account. The account object must be created using the [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") method.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
The method is valid only if the PUMP_MODE_USERS, PUMP_MODE_ORDERS and PUMP_MODE_POSITIONS [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") were specified during connection.