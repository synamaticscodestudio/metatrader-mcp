# Category (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNews ](imtnews.md "IMTNews")/ Category | [](imtnews_subject.md "Subject") [](imtnews_time.md "Time") |
| --- | --- | --- |
| --- | --- |

IMTNews::Category
Get the news category.
C++
LPCWSTR IMTNews::Category() const  
---  
.NET (Gateway/Manager API)
string CIMTNews.Category()  
---  
Return Value
If successful, it returns a pointer to a string with the news category. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTNews](imtnews.md "IMTNews") object. To use the line after the object removal (call of the [IMTNews::Release](imtnews_release.md "Release") method of this object), a copy of it should be created.
Categories are used for filtering news into [groups](config_group.md "Groups"), and for easy viewing of news in terminals. A category can be assigned when creating a news item manually (from a terminal or API) or by a [data feed](imtconfeeder_categories.md "Categories") when broadcasting the news.
IMTNews::Category
Set the news category.
C++
MTAPIRES IMTNews::Category( LPCWSTR category // Categories )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTNews.Category( string category // Categories )  
---  
Parameters
category
[in] News category.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Categories are used for filtering news into [groups](config_group.md "Groups"), and for easy viewing of news in terminals.
The length of the category name is not limited.