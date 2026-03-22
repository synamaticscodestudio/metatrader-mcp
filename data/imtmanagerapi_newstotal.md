# NewsTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ News Database ](imtmanagerapi_news.md "Functions")/ NewsTotal | [](imtmanagerapi_newsunsubscribe.md "NewsUnsubscribe") [](imtmanagerapi_newsnext.md "NewsNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NewsTotal
Get the total number of news items received by the manager.
C++
UINT IMTManagerAPI::NewsTotal()  
---  
.NET
uint CIMTManagerAPI.NewsTotal()  
---  
Python
ManagerAPI.NewsTotal()  
---  
Return Value
The total number of news items received by the manager whose account is used for connecting to the server.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_NEWS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.