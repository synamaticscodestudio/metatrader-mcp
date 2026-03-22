# NewsUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ News Database ](serverapi_news.md "News Database")/ NewsUnsubscribe | [](imtserverapi_newssubscribe.md "NewsSubscribe") [](imtserverapi_newssend.md "NewsSend") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NewsUnsubscribe
Undubscribe from events and hooks associated with changes in the news database.
MTAPIRES IMTServerAPI::NewsUnsubscribe( IMTNewsSink* sink // A pointer to the IMTNewsSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTNewsSink](imtnewssink.md "IMTNewsSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::NewsSubscribe](imtserverapi_newssubscribe.md "NewsSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.
This method can be used only on history servers.