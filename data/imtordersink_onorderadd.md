# OnOrderAdd (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderSink ](imtordersink.md "IMTOrderSink")/ OnOrderAdd | [](imtordersink.md "IMTOrderSink") [](imtordersink_onorderupdate.md "OnOrderUpdate") |
| --- | --- | --- |
| --- | --- |

IMTOrderSink::OnOrderAdd
A handler of the event of adding an open order.
C++
virtual void IMTOrderSink::OnOrderAdd( const IMTOrder* order // A pointer to the order object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTOrderSink.OnOrderAdd( CIMTOrder order // Order object )  
---  
Parameters
order
[in] A pointer to the object of an added order.
Note
This method is called by the API to notify of adding of a new open order.
Open orders include pending orders, as well as the orders that have not yet been filled or have been partially filled (active orders).
The handler is also called when changing the [group of an account](imtuser_group.md "Group"), if there are currently open order on the account. In this case, the old order is deleted from the account in the old group and a new order is added in the new group. Therefore two events, IMTOrderSink::OnOrderAdd and [IMTOrderSink::OnOrderDelete](imtordersink_onorderdelete.md "OnOrderDelete"), are sequentially called for orders.