# OrderAdd (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderAdd | [](imtmanagerapi_orderrequestbytickets.md "OrderRequestByTickets") [](imtmanagerapi_orderaddbatch.md "OrderAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderAdd
Add an open order the server database.
C++
MTAPIRES IMTManagerAPI::OrderAdd( IMTOrder* order // Order object )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderAdd( CIMTOrder order // Order object )  
---  
Python
ManagerAPI.OrderAdd( order # Order object )  
---  
Parameters
order
[in] Order object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An order can only be added to the database of the server, to which the application is connected.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.
The ticket of the order you are adding ([IMTOrder::OrderSet](imtorder_orderset.md "OrderSet")) must fall within the orders range on the trading server ([IMTConServerTrade::OrdersRange*](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd")), and it must be greater than the last used ticket. 
Note that the server allocates new tickets starting from the last used ticket in the range. For example, if you create an order with a ticket of 5000, the server will allocate for further orders the tickets 5001, 5002, etc. (even if tickets before 5000 are not busy).
If an order is added with a zero ticket, the server will assign the ticket automatically.
The integrity of the order being added is checked. The following fields must be filled:
  * [IMTOrder::Login](imtorder_login.md "Login") (an account with this login must exist on the server)
  * [IMTOrder::Symbol](imtorder_login.md "Login")
  * [IMTOrder::Type](imtorder_type.md "Type")
  * [IMTOrder::Digits](imtorder_digits.md "Digits")
  * [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency")
  * [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize")
  * [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial") (must be less than IMTOrder::VolumeCurrent)
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent") (must not be greater than IMTOrder::VolumeInitial)
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder")
  * [IMTOrder::State](imtorder_state.md "State") (the state must correspond to an open order; it cannot be ORDER_STATE_CANCELED, ORDER_STATE_PARTIAL, ORDER_STATE_FILLED, ORDER_STATE_REJECTED, ORDER_STATE_EXPIRED)
  * [IMTOrder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")

The [IMTOrder::TimeDone](imtorder_timedone.md "TimeDone") and [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc") fields must not be filled in the order.