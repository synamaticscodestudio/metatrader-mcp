# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNews ](imtnews.md "IMTNews")/ Assign | [](imtnews_release.md "Release") [](imtnews_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTNews::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTNews::Assign( const IMTNews* news // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTNews.Assign( CIMTNews news // Source object )  
---  
Parameters
news
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.