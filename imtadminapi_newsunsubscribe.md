# NewsUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ News Database ](imtadminapi_news.md "Functions")/ NewsUnsubscribe | [](imtadminapi_newssubscribe.md "NewsSubscribe") [](imtadminapi_newssend.md "NewsSend") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NewsUnsubscribe
Undubscribe from events and hooks associated with changes in the news database.
C++
MTAPIRES IMTAdminAPI::NewsUnsubscribe( IMTNewsSink* sink // A pointer to the IMTNewsSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.NewsUnsubscribe( CIMTNewsSink sink // CIMTNewsSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTNewsSink](imtnewssink.md "IMTNewsSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::NewsSubscribe](imtadminapi_newssubscribe.md "NewsSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.