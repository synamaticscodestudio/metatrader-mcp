# NewsSend (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ News Database ](imtadminapi_news.md "Functions")/ NewsSend | [](imtadminapi_newsunsubscribe.md "NewsUnsubscribe") [](imtadminapi_charts.md "History Data Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NewsSend
Send news.
C++
MTAPIRES IMTAdminAPI::NewsSend( IMTNews* news // News object )  
---  
.NET
MTRetCode CIMTAdminAPI.NewsSend( CIMTNews news // News object )  
---  
Parameters
news
[in] News object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Before sending a news item, its correctness is checked (presence of the [subject](imtnews_subject.md "Subject")).