# Time (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNews ](imtnews.md "IMTNews")/ Time | [](imtnews_category.md "Category") [](imtnews_language.md "Language") |
| --- | --- | --- |
| --- | --- |

IMTNews::Time
Get the time of news sending.
C++
INT64 IMTNews::Time() const  
---  
.NET (Gateway/Manager API)
long CIMTNews.Time()  
---  
Return Value
The time of news sending in seconds that have elapsed since 01.01.1970.
IMTNews::Time
Set the time of news sending.
C++
MTAPIRES IMTNews::Time( const INT64 datetime // Sending time )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTNews.Time( long datetime // Sending time )  
---  
Parameters
datetime
[in] The time of news sending in seconds that have elapsed since 01.01.1970.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.