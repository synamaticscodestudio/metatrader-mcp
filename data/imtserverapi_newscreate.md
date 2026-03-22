# NewsCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ News Database ](serverapi_news.md "News Database")/ NewsCreate | [](serverapi_news.md "News Database") [](imtserverapi_newssubscribe.md "NewsSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::NewsCreate
Create an object of a news item.
IMTNews* IMTServerAPI::NewsCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTNews](imtnews.md "IMTNews") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTNews::Release](imtnews_release.md "Release") method of this object.
This method can be used only on history servers.