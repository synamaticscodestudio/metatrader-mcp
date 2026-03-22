# NewsUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ News Database ](imtmanagerapi_news.md "Functions")/ NewsUnsubscribe | [](imtmanagerapi_newssubscribe.md "NewsSubscribe") [](imtmanagerapi_newstotal.md "NewsTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NewsUnsubscribe
Undubscribe from events and hooks associated with changes in the news database.
C++
MTAPIRES IMTManagerAPI::NewsUnsubscribe( IMTNewsSink* sink // A pointer to the IMTNewsSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.NewsUnsubscribe( CIMTNewsSink sink // CIMTNewsSink object )  
---  
Python
ManagerAPI.NewsUnsubscribe( sink # IMTNewsSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTNewsSink](imtnewssink.md "IMTNewsSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTManagerAPI::NewsSubscribe](imtmanagerapi_newssubscribe.md "NewsSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.