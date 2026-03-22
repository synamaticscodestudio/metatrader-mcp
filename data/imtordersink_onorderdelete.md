# OnOrderDelete (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrderSink ](imtordersink.md "IMTOrderSink")/ OnOrderDelete | [](imtordersink_onorderupdate.md "OnOrderUpdate") [](imtordersink_onorderclean.md "OnOrderClean") |
| --- | --- | --- |
| --- | --- |

IMTOrderSink::OnOrderDelete
A handler of the event of deleting an open order.
C++
virtual void IMTOrderSink::OnOrderDelete( const IMTOrder* order // A pointer to the order object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTOrderSink.OnOrderDelete( CIMTOrder  order // A pointer to the order object )  
---  
Parameters
order
[in] A pointer to the object of a deleted order.
Note
This method is called by the API to notify that an open order has been deleted.
Open orders include pending orders, as well as the orders that have not yet been filled or have been partially filled (active orders).
The handler is also called when changing the [group of an account](imtuser_group.md "Group"), if there are currently open order on the account. In this case, the old order is deleted from the account in the old group and a new order is added in the new group. Therefore two events, [IMTOrderSink::OnOrderAdd](imtordersink_onorderadd.md "OnOrderAdd") and IMTOrderSink::OnOrderDelete, are sequentially called for orders.