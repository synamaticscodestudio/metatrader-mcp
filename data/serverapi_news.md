# News Database (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ News Database | [](imtserverapi_mailsend.md "MailSend") [](imtserverapi_newscreate.md "NewsCreate") |
| --- | --- | --- |
| --- | --- |

News Database
The MetaTrader 5 Server API provides functions for working with the news database of the platform. Using them you can receive and send news, as well as handle events associated with changes in the news database of the server.
News functions and interfaces work only on history servers.  
---  
The following functions are available for working with news:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [NewsCreate](imtserverapi_newscreate.md "NewsCreate") | Create an object of a news item. |
| [NewsSubscribe](imtserverapi_newssubscribe.md "NewsSubscribe") | Subscribe to events and hooks associated with changes in the news database. |
| [NewsUnsubscribe](imtserverapi_newsunsubscribe.md "NewsUnsubscribe") | Undubscribe from events and hooks associated with changes in the news database. |
| [NewsSend](imtserverapi_newssend.md "NewsSend") | Send news. |