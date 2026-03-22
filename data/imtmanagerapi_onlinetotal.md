# OnlineTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Online Connections ](imtmanagerapi_online.md "Online Connection Functions")/ OnlineTotal | [](imtmanagerapi_onlinecreatearray.md "OnlineCreateArray") [](imtmanagerapi_onlinenext.md "OnlineNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OnlineTotal
Get the total amount of the current connections to the trade server.
C++
UINT IMTManagerAPI::OnlineTotal()  
---  
.NET
uint CIMTManagerAPI.OnlineTotal()  
---  
Python
ManagerAPI.OnlineTotal()  
---  
Return Value
Amount of the current connections to the trade server.
Notes
All types of connection are considered, including client, manager and API ones with the exception of the cluster components' (platform servers') connections.
The method only works if the [pumping modes](imtmanagerapi_enpumpmodes.md "Pumping Mode") PUMP_MODE_USERS and PUMP_MODE_ACTIVITY are enabled.