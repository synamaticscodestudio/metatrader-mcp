# OnHistoryAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTHistorySink ](imthistorysink.md "IMTHistorySink")/ OnHistoryAdd | [](imthistorysink.md "IMTHistorySink") [](imthistorysink_onhistoryupdate.md "OnHistoryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTHistorySink::OnHistoryAdd
A handler of the event of adding a closed order.
C++
virtual void IMTHistorySink::OnHistoryAdd( const IMTOrder* order // A pointer to the order object )  
---  
.NET
virtual void CIMTHistorySink.OnHistoryAdd( CIMTOrder order // Order object )  
---  
Parameters
order
[in] A pointer to the object of an added order.
Note
This method is used in Server API only. It is called to notify of adding of a new closed order.
Closed orders include executed, expired and canceled orders (inactive).