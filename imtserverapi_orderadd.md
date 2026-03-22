# OrderAdd (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ OrderAdd | [](imtserverapi_orderunsubscribe.md "OrderUnsubscribe") [](imtserverapi_orderaddbatch.md "OrderAddBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::OrderAdd
Adds an open order to the server database.
MTAPIRES IMTServerAPI::OrderAdd( IMTOrder* order // The order object )  
---  
Parameters
order
[in] Order object.
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an appropriate error code is returned.
Note
An order can only be added to the database of the server, on which the plugin is running.
The ticket of the order being added ([IMTDeal::OrderSet](imtorder_orderset.md "OrderSet")) must fall into the range of orders of the trading server ([IMTConServerTrade::OrdersRange*](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting with the last used ticket in the range. For example, if you create an order with ticket 5000, the server will allocate for further orders ticket numbers 5001, 5002 etc. (even if tickets below 5000 have not been used).
If an order is added with a zero ticket, the ticket will be automatically assigned by the server.
The order being added is checked for integrity. The following fields must be specified in orders:
  * [IMTOrder::Login](imtorder_login.md "Login") (an account with this login must exist on the server)
  * [IMTOrder::Symbol](imtorder_login.md "Login")
  * [IMTOrder::Type](imtorder_type.md "Type")

  * [IMTOrder::Digits](imtorder_digits.md "Digits")
  * [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency")
  * [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize")

  * [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial") (must be less than IMTOrder::VolumeCurrent)
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent") (cannot be greater than IMTOrder::VolumeInitial)
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder")
  * [IMTOrder::State](imtorder_state.md "State") (the state must correspond to an open order, it cannot be equal to ORDER_STATE_CANCELED, ORDER_STATE_PARTIAL, ORDER_STATE_FILLED, ORDER_STATE_REJECTED, ORDER_STATE_EXPIRED)
  * [IMTOrder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")

The [IMTOrder::TimeDone](imtorder_timedone.md "TimeDone") and [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc") fields must not be filled in the order.