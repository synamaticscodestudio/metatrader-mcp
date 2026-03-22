# NewsBodyRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ News Database ](imtmanagerapi_news.md "Functions")/ NewsBodyRequest | [](imtmanagerapi_newsnext.md "NewsNext") [](imtmanagerapi_newssend.md "NewsSend") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::NewsBodyRequest
Get the body of the news item received by the manager.
C++
MTAPIRES IMTManagerAPI::NewsBodyRequest( const UINT64 id, // News ID IMTNews* news // News object )  
---  
.NET
MTRetCode CIMTManagerAPI.NewsBodyRequest( ulong id, // News ID CIMTNews news // News object )  
---  
Python
ManagerAPI.NewsBodyRequest( id # News ID )  
---  
Parameters
pos
[in] The ID of the news item received by the manager. The [IMTNews::Id](imtnews_id.md "ID") value is used as the identifier.
news
[out] News object. The news object must first be created using the [IMTManagerAPI::NewsCreate](imtmanagerapi_newscreate.md "NewsCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method completely fills the 'news' object, i.e. the news body (including attachments), as well as the subject, time, etc.
The method is valid only if the [IMTManagerAPI::PUMP_MODE_NEWS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.
The method cannot be called from event handlers (any methods of IMT*Sink classes).