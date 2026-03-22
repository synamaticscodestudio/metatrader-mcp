# HistoryAddBatchArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryAddBatchArray | [](imtserverapi_historyaddbatch.md "HistoryAddBatch") [](imtserverapi_historyupdate.md "HistoryUpdate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryAddBatchArray
Adds closed orders to a server database in bulk.
MTAPIRES IMTServerAPI::HistoryAddBatchArray( IMTOrder**  orders, // An array of orders const UINT orders_total, // The number of orders in the array MTAPIRES* results // An array of results )  
---  
Parameters
orders
[in] A pointer to the array of orders.
ordes_total
[in] The number of orders in the 'orders' array.
results
[out] An array with the results of adding of orders. The size of the 'results' array must be not less than that of 'orders'.
Return value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all orders have been added. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of orders have been added. Analyze the 'results' array for a detailed information on execution results. The result of adding of each order from the 'orders' array is added to 'results'. The index of a result corresponds to the index of an order in the source array.
Note
Orders can only be added to the database of the server, on which the plugin is running.
Tickets of the orders you are adding ([IMTOrder::OrderSet](imtorder_orderset.md "OrderSet")) must fall into the range of orders of that trade server ([IMTConServerTrade::OrdersRange*](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting from the last used ticket in the range. For example, if you create an order with a ticket of 5000, the server will allocate for further orders the tickets 5001, 5002, etc. (even of tickets before 5000 are not busy).
If ticket is not specified in the orders, appropriate tickets will be automatically assigned by the server.
Orders being added are checked for integrity. The following fields must be filled:
  * [IMTOrder::Login](imtorder_login.md "Login") (an account with this login must exist on the server)
  * [IMTOrder::Symbol](imtorder_login.md "Login")
  * [IMTOrder::Type](imtorder_type.md "Type")

  * [IMTOrder::Digits](imtorder_digits.md "Digits")
  * [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency")
  * [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize")

  * [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial") (must be >= IMTOrder::VolumeCurrent)
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent")
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder")
  * [IMTOrder::State](imtorder_state.md "State") (the state must correspond to a closed order: IMTOrder::ORDER_STATE_CANCELED, IMTOrder::ORDER_STATE_FILLED, IMTOrder::ORDER_STATE_EXPIRED or IMTOrder::ORDER_STATE_RECJECTED))

  * [IMTOrder::TimeSetup](imtorder_timesetup.md "TimeSetup") or [IMTOrder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")
  * [IMTOrder::TimeDone](imtorder_timedonemsc.md "TimeDoneMsc") or [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc") (cannot be less than IMTOrder::TimeSetup/IMTOrder::TimeSetupMsc)

To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.