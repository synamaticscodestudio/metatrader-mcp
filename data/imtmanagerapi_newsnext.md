# NewsNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ News Database ](imtmanagerapi_news.md "Functions")/ NewsNext | [](imtmanagerapi_newstotal.md "NewsTotal") [](imtmanagerapi_newsbodyrequest.md "NewsBodyRequest") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NewsNext
Get the news item received by the manager.
C++
MTAPIRES IMTManagerAPI::NewsNext( const UINT pos, // News position IMTNews* news // News object )  
---  
.NET
MTRetCode CIMTManagerAPI.NewsNext( uint pos, // News position CIMTNews news // News object )  
---  
Python
ManagerAPI.NewsNext( pos # News position )  
---  
Parameters
pos
[in] Position of the news item received by the manager, ranging from 0.
news
[out] News object. The news object must first be created using the [IMTManagerAPI::NewsCreate](imtmanagerapi_newscreate.md "NewsCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method copies data of the news item at the specified position to the news object. The method is valid only if the [IMTManagerAPI::PUMP_MODE_NEWS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.