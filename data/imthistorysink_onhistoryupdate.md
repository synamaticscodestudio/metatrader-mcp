# OnHistoryUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTHistorySink ](imthistorysink.md "IMTHistorySink")/ OnHistoryUpdate | [](imthistorysink_onhistoryadd.md "OnHistoryAdd") [](imthistorysink_onhistorydelete.md "OnHistoryDelete") |
| --- | --- | --- |
| --- | --- |

IMTHistorySink::OnHistoryUpdate
A handler of the event of modifying a closed order.
C++
virtual void IMTHistorySink::OnHistoryUpdate( const IMTOrder* order // A pointer to the order object )  
---  
.NET
virtual void ICIMTHistorySink::OnHistoryUpdate( CIMTOrder order // Order object )  
---  
Parameters
order
[in] A pointer to the object of an updated order.
Note
This method is used in Server API only. It is called to notify of the modification of a closed order.
Closed orders include executed, expired and canceled orders (inactive).