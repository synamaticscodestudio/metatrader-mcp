# NewsSend (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ News Database ](imtmanagerapi_news.md "Functions")/ NewsSend | [](imtmanagerapi_newsbodyrequest.md "NewsBodyRequest") [](imtmanagerapi_trade_operations.md "Trading Functions") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NewsSend
Send news.
C++
MTAPIRES IMTManagerAPI::NewsSend( IMTNews* news // News object )  
---  
.NET
MTRetCode CIMTManagerAPI.NewsSend( CIMTNews news // News object )  
---  
Python
ManagerAPI.NewsSend( news # News object )  
---  
Parameters
news
[in] News object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Before sending a news item, its correctness is checked (presence of the [subject](imtnews_subject.md "Subject")).