# Language (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNews ](imtnews.md "IMTNews")/ Language | [](imtnews_time.md "Time") [](imtnews_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTNews::Language
Gets the news language.
C++
UINT IMTNews::Language() const  
---  
.NET (Gateway/Manager API)
uint CIMTNews.Language()  
---  
Return Value
News language.
Note
The language is used to filter news when receiving in terminals and when sending to different [groups](imtcongroup_newslangadd.md "NewsLangAdd").
IMTNews::Language
Set the news language.
C++
MTAPIRES IMTNews::Language( const UINT language // News language )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTNews.Language( uint language // News language )  
---  
Parameters
language
[in] News language in the LANGID format used in [MS Windows](https://msdn.microsoft.com/en-us/library/windows/desktop/dd318693) (value from Prim.lang.identifier).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The language is used to filter news when receiving in terminals and when sending to different [groups](imtcongroup_newslangadd.md "NewsLangAdd").