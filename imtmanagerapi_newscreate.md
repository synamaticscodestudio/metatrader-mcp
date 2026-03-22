# NewsCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ News Database ](imtmanagerapi_news.md "Functions")/ NewsCreate | [](imtmanagerapi_news.md "Functions") [](imtmanagerapi_newssubscribe.md "NewsSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NewsCreate
Create an object of a news item.
C++
IMTNews* IMTManagerAPI::NewsCreate()  
---  
.NET
CIMTNews CIMTManagerAPI.NewsCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTNews](imtnews.md "IMTNews") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTManagerAPI::Release](imtnews_release.md "Release") method of this object.