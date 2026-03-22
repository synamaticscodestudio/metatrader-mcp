# OnOrderSync (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderSink ](imtordersink.md "IMTOrderSink")/ OnOrderSync | [](imtordersink_onorderclean.md "OnOrderClean") [](imthistorysink.md "IMTHistorySink") |
| --- | --- | --- |
| --- | --- |

IMTOrderSink::OnOrderSync
A handler of the event of synchronization of a database of open orders.
C++
virtual void IMTOrderSink::OnOrderSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTOrderSink.OnOrderSync()  
---  
Note
This method is called by the API to notify that synchronization of a database of open orders is completed.
  * Server API — between the trade server and its backup server.
  * Manager API — between the trade server and the local data cache of the application.
