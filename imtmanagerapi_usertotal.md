# UserTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Users ](imtmanagerapi_user.md "User Functions")/ UserTotal | [](imtmanagerapi_userupdatebatcharray.md "UserUpdateBatchArray") [](imtmanagerapi_userget.md "UserGet") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::UserTotal
Get the total number of users on a trade server.
C++
UINT IMTManagerAPI::UserTotal()  
---  
.NET
uint CIMTManagerAPI.UserTotal()  
---  
Python
ManagerAPI.UserTotal()  
---  
Return Value
The number of users on a trade server.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_USERS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.