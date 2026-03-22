# NewsSubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ News Database ](imtmanagerapi_news.md "Functions")/ NewsSubscribe | [](imtmanagerapi_newscreate.md "NewsCreate") [](imtmanagerapi_newsunsubscribe.md "NewsUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NewsSubscribe
Subscribe to events and hooks associated with changes in the news database.
C++
MTAPIRES IMTManagerAPI::NewsSubscribe( IMTNewsSink* sink // A pointer to the IMTNewsSink object )  
---  
.NET
MTRetCode CIMTManagerAPI.NewsSubscribe( CIMTNewsSink sink // CIMTNewsSink object )  
---  
Python
ManagerAPI.NewsSubscribe( sink # IMTNewsSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTNewsSink](imtnewssink.md "IMTNewsSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTNewsSink](imtnewssink.md "IMTNewsSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTManagerAPI::NewsUnsubscribe](imtmanagerapi_newsunsubscribe.md "NewsUnsubscribe") or until the administrator interface is deleted using the [IMTManagerAPI::Release](imtmanagerapi_release.md "Release") method.
To receive events connected with mews database changes, the pumping mode [IMTManagerAPI::PUMP_MODE_NEWS](imtmanagerapi_enpumpmodes.md "Pumping Mode") must be enabled.