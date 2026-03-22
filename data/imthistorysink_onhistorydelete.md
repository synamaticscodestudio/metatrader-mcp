# OnHistoryDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTHistorySink ](imthistorysink.md "IMTHistorySink")/ OnHistoryDelete | [](imthistorysink_onhistoryupdate.md "OnHistoryUpdate") [](imthistorysink_onhistoryclean.md "OnHistoryClean") |
| --- | --- | --- |
| --- | --- |

IMTHistorySink::OnHistoryDelete
A handler of the event of deleting a closed order.
C++
virtual void IMTHistorySink::OnHistoryDelete( const IMTOrder* order // A pointer to the order object )  
---  
.NET
virtual void CIMTHistorySink.OnHistoryDelete( CIMTOrder  order // Order object )  
---  
Parameters
order
[in] A pointer to the object of a deleted order.
Note
This method is used in Server API only. It is called to notify that a closed order has been deleted.
Closed orders include executed, expired and canceled orders (inactive).