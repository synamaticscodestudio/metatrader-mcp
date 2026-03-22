# OnOrderUpdate (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderSink ](imtordersink.md "IMTOrderSink")/ OnOrderUpdate | [](imtordersink_onorderadd.md "OnOrderAdd") [](imtordersink_onorderdelete.md "OnOrderDelete") |
| --- | --- | --- |
| --- | --- |

IMTOrderSink::OnOrderUpdate
A handler of the event of modifying an open order.
C++
virtual void IMTOrderSink::OnOrderUpdate( const IMTOrder* order // A pointer to the order object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTOrderSink.OnOrderUpdate( CIMTOrder order // Order object )  
---  
Parameters
order
[in] A pointer to the object of an updated order.
Note
This method is called by the API to notify of the modification of an open order.
Open orders include pending orders, as well as the orders that have not yet been filled or have been partially filled (active orders).