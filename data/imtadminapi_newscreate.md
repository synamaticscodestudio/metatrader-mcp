# NewsCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ News Database ](imtadminapi_news.md "Functions")/ NewsCreate | [](imtadminapi_news.md "Functions") [](imtadminapi_newssubscribe.md "NewsSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::NewsCreate
Create an object of a news item.
C++
IMTNews* IMTAdminAPI::NewsCreate()  
---  
.NET
CIMTNews CIMTAdminAPI.NewsCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTNews](imtnews.md "IMTNews") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTNews::Release](imtnews_release.md "Release") method of this object.