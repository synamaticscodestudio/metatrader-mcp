# HistoryAddBatch (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryAddBatch | [](imtserverapi_historyadd.md "HistoryAdd") [](imtserverapi_historyaddbatcharray.md "HistoryAddBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryAddBatch
Adds closed orders to a server database in bulk.
MTAPIRES IMTServerAPI::HistoryAddBatch( IMTOrderArray*  orders, // An array of orders MTAPIRES* results // An array of results )  
---  
Parameters
orders
[in] A pointer to the object of the orders array [IMTOrderArray](imtorderarray.md "IMTOrderArray").
results
[out] An array with the result of the addition of orders. The size of the 'results' array must be not less than that of 'orders'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") code means that all specified orders have been added. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the orders have been added. For details, you should analyze the 'results' array. The result of addition of each order from the 'order' array is added to the 'results' array. The index of a result corresponds to the index of an order in the source array.
Note
Orders can only be added to the database of the server, on which the plugin is running.
The tickets of the orders being added ([IMTDeal::OrderSet](imtorder_orderset.md "OrderSet")) must fall into the range of orders of the trading server ([IMTConServerTrade::OrdersRange*](imtconservertrade_ordersrangeadd.md "OrdersRangeAdd")), and must be greater than the last used ticket. 
Note that the server allocates new tickets starting with the last used ticket in the range. For example, if you create an order with ticket 5000, the server will allocate for further orders ticket numbers 5001, 5002 etc. (even if tickets below 5000 have not been used).
If orders are added without specifying tickets, the server will automatically assign tickets to such orders.
Orders being added is checked for integrity. The following fields must be specified in deals:
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