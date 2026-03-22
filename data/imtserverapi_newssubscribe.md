# NewsSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ News Database ](serverapi_news.md "News Database")/ NewsSubscribe | [](imtserverapi_newscreate.md "NewsCreate") [](imtserverapi_newsunsubscribe.md "NewsUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NewsSubscribe
Subscribe to events and hooks associated with changes in the news database.
MTAPIRES IMTServerAPI::NewsSubscribe( IMTNewsSink* sink // A pointer to the IMTNewsSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTNewsSink](imtnewssink.md "IMTNewsSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTNewsSink](imtnewssink.md "IMTNewsSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::NewsUnsubscribe](imtserverapi_newsunsubscribe.md "NewsUnsubscribe") or until the plugin is deleted.
This method can be used only on history servers.