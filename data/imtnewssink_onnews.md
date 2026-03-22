# OnNews (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNewsSink ](imtnewssink.md "IMTNewsSink")/ OnNews | [](imtnewssink.md "IMTNewsSink") [](imtnewssink_hooknews.md "HookNews") |
| --- | --- | --- |
| --- | --- |

IMTNewsSink::OnNews
A handler of the event of news receiving.
C++
virtual void IMTNewsSink::OnNews( const IMTNews* news // A pointer to the news object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTNewsSink.OnNews( CIMTNews news // News object )  
---  
Parameters
news
[in] A pointer to the news object.
Note
In Manager API, only the news header without the body is received in the IMTNewsSink::OnNews event. To request the news body, call the [IMTManagerAPI::NewsBodyRequest](imtmanagerapi_newsbodyrequest.md "NewsBodyRequest") method while passing to the method the news ID ([IMTNews::ID](imtnews_id.md "ID")) from the event.
In Server API, full newsletters with headers and bodies are received in the IMTNewsSink::OnNews event.