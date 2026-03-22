# UserAccountRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserAccountRequest | [](imtmanagerapi_useraccountgetbylogins.md "UserAccountGetByLogins") [](imtmanagerapi_useraccountrequestbylogins.md "UserAccountRequestByLogins") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserAccountRequest
Request a client's account trade order from a server by the ticket.
C++
virtual MTAPIRES IMTManagerAPI::UserAccountRequest( const UINT64 login, // Client login IMTAccount* account // An object of a trading account )  
---  
.NET
MTRetCode CIMTManagerAPI.UserAccountRequest( ulong login, // Client login CIMTAccount account // An object of a trading account )  
---  
Python
ManagerAPI.UserAccountRequest( login # Client login )  
---  
Parameters
login
[in] The login of a client.
account
[out] An object of a client trading account. The account object must be created using the [IMTManagerAPI::UserCreateAccount](imtmanagerapi_usercreateaccount.md "UserCreateAccount") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method cannot be called from event handlers (any methods of IMT*Sink classes).