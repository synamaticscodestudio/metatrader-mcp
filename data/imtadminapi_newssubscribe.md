# NewsSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ News Database ](imtadminapi_news.md "Functions")/ NewsSubscribe | [](imtadminapi_newscreate.md "NewsCreate") [](imtadminapi_newsunsubscribe.md "NewsUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NewsSubscribe
Subscribe to events and hooks associated with changes in the news database.
C++
MTAPIRES IMTAdminAPI::NewsSubscribe( IMTNewsSink* sink // A pointer to the IMTNewsSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.NewsSubscribe( CIMTNewsSink sink // CIMTNewsSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTNewsSink](imtnewssink.md "IMTNewsSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTNewsSink](imtnewssink.md "IMTNewsSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTAdminAPI::NewsUnsubscribe](imtadminapi_newsunsubscribe.md "NewsUnsubscribe") or until the administrator interface is deleted using the [IMTAdminAPI::Release](imtadminapi_release.md "Release") method.