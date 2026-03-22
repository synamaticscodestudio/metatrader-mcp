# UserCreateAccount (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserCreateAccount | [](imtgatewayapi_usercreate.md "UserCreate") [](imtgatewayapi_usersubscribe.md "UserSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserCreateAccount
Create an object of a client's trading account.
C++
IMTAccount* IMTGatewayAPI::UserCreateAccount()  
---  
.NET
CIMTAccount CIMTGatewayAPI.UserCreateAccount()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTAccount](imtaccount.md "IMTAccount") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTAccount::Release](imtaccount_release.md "Release") method of this object.