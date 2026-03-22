# Flags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNews ](imtnews.md "IMTNews")/ Flags | [](imtnews_language.md "Language") [](imtnews_body.md "Body") |
| --- | --- | --- |
| --- | --- |

IMTNews::Flags
Get news flags.
C++
UINT IMTNews::Flags() const  
---  
.NET (Gateway/Manager API)
EnNewsFlags CIMTNews.Flags()  
---  
Return Value
The value of the [IMTNews::EnNewsFlags](imtnews_enum.htm#ennewsflags) enumeration.
IMTNews::Flags
Set news flags.
C++
MTAPIRES IMTNews::Flags( const UINT flags // News flags )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTNews.Flags( EnNewsFlags flags // News flags )  
---  
Parameters
flags
[in] News flags. The [IMTNews::EnNewsFlags](imtnews_enum.htm#ennewsflags) enumeration is used for setting the flag.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.