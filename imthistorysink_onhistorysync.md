# OnHistorySync (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTHistorySink ](imthistorysink.md "IMTHistorySink")/ OnHistorySync | [](imthistorysink_onhistoryclean.md "OnHistoryClean") [](trading_deal.md "Deals") |
| --- | --- | --- |
| --- | --- |

IMTHistorySink::OnHistorySync
A handler of the event of synchronization of a database of closed orders.
C++
virtual void IMTHistorySink::OnHistorySync()  
---  
.NET
virtual void CIMTHistorySink.OnHistorySync()  
---  
Note
This method is called only on the trade server in the Server API. It notifies that the synchronization of the database of closed orders between the trade server and its backup server has completed.