# OrderAddBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Orders ](imtmanagerapi_trading_order.md "Orders")/ OrderAddBatchArray | [](imtmanagerapi_orderaddbatch.md "OrderAddBatch") [](imtmanagerapi_orderupdate.md "OrderUpdate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::OrderAddBatchArray
Add a batch of open orders to the server database.
C++
MTAPIRES IMTManagerAPI::OrderAddBatchArray( IMTOrder**  order, // Array of orders const UINT orders_total, // Number of orders in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.OrderAddBatchArray( CIMTOrder[] orders, // Array of orders MTRetCode[] retcodes // Array of results )  
---  
Parameters
orders
[in] A pointer to the array of orders.
orders_total
[in] The number of orders in the 'orders' array.
results
[out] An array with the results of update of orders. The size of the 'results' array must not be less than that of 'orders'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all the specified orders have been added. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the orders have been added. Analyze the 'results' array for more details on the execution results. The result of adding of each order from the 'orders' array is added to 'results'. The index of a result corresponds to the index of an order in the source array.
Note
Orders can only be added to the database of the server, to which the application is connected.
The manager account requires the [RIGHT_TRADE_MANAGER](imtconmanager_enum.htm#enmanagerrights) permission in order to use the function.
The tickets of the orders you are adding ([IMTOrder::OrderSet](imtorder_orderset.md "OrderSet")) must fall within the orders range on the trading server ([IMTConServerTrade::OrdersRange*](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd")), and they must be greater than the last used ticket. 
Note that the server allocates new tickets starting from the last used ticket in the range. For example, if you create an order with a ticket of 5000, the server will allocate for further orders the tickets 5001, 5002, etc. (even if tickets before 5000 are not busy).
If orders are added with a zero ticket, the server will assign the tickets automatically.
Orders being added are checked for integrity. The following fields must be filled:
  * [IMTOrder::Login](imtorder_login.md "Login")
  * [IMTOrder::Symbol](imtorder_login.md "Login")
  * [IMTOrder::Type](imtorder_type.md "Type")

  * [IMTOrder::Digits](imtorder_digits.md "Digits")
  * [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency")
  * [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize")

  * [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial") (must be less than IMTOrder::VolumeCurrent)
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent") (cannot be greater than IMTOrder::VolumeInitial)
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder")
  * [IMTOrder::State](imtorder_state.md "State") (the state must correspond to an open order; it cannot be ORDER_STATE_CANCELED, ORDER_STATE_PARTIAL, ORDER_STATE_FILLED, ORDER_STATE_REJECTED, ORDER_STATE_EXPIRED)
  * [IMTOrder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")

The [IMTOrder::TimeDone](imtorder_timedone.md "TimeDone") and [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc") fields must not be filled in the orders.
To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.