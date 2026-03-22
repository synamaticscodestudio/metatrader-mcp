# NewsSend (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ News Database ](serverapi_news.md "News Database")/ NewsSend | [](imtserverapi_newsunsubscribe.md "NewsUnsubscribe") [](serverapi_trading_daily.md "Daily Reports") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NewsSend
Send news.
MTAPIRES IMTServerAPI::NewsSend( IMTNews* news // News object )  
---  
Parameters
news
[in] News object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Before sending a news item, its correctness is checked (presence of the [subject](imtnews_subject.md "Subject")).
This method can be used only on history servers.