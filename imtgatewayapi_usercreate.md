# UserCreate (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Users ](imtgatewayapi_user.md "Users")/ UserCreate | [](imtgatewayapi_user.md "Users") [](imtgatewayapi_usercreateaccount.md "UserCreateAccount") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::UserCreate
Create an object of a client record.
C++
IMTUser* IMTGatewayAPI::UserCreate()  
---  
.NET
CIMTUser CIMTGatewayAPI.UserCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTUser](imtuser.md "IMTUser") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTUser::Release](imtuser_release.md "Release") method of this object.