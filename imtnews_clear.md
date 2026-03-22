# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ News Database ](reference_news.md "News Database") / [ IMTNews ](imtnews.md "IMTNews")/ Clear | [](imtnews_assign.md "Assign") [](imtnews_id.md "ID") |
| --- | --- | --- |
| --- | --- |

IMTNews::Clear
Clear an object.
C++
MTAPIRES IMTNews::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTNews.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.