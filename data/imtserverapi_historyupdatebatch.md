# HistoryUpdateBatch (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryUpdateBatch | [](imtserverapi_historyupdate.md "HistoryUpdate") [](imtserverapi_historyupdatebatcharray.md "HistoryUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryUpdateBatch
Updates closed orders in a server database in bulk.
MTAPIRES IMTServerAPI::HistoryUpdateBatch( IMTOrderArray*  orders, // An array of orders MTAPIRES* results // An array of results )  
---  
Parameters
orders
[in] A pointer to the object of the orders array [IMTOrderArray](imtorderarray.md "IMTOrderArray").
results
[out] An array with orders modification results. The size of the 'results' array must be not less than that of 'orders'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all specified orders have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the orders have been updated. For details, you should analyze the 'results' array. The result of update of each order from the 'order' array is added to the 'results' array. The index of a result corresponds to the index of an order in the source array.
Note
Orders can be updated only from the plugins, which run on the same trade server where the orders were created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
All required fields of orders must be filled in, not only the ones that need to be changed. It is recommended that you first receive orders from the server, change required fields, and then send them back to the server.
The server checks the correctness of the updated orders. The following fields must be filled:
  * [IMTOrder::Login](imtorder_login.md "Login") (an account with this login must exist on the server)
  * [IMTOrder::Symbol](imtorder_login.md "Login")
  * [IMTOrder::Type](imtorder_type.md "Type")

  * [IMTOrder::Digits](imtorder_digits.md "Digits")
  * [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency")
  * [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize")

  * [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial")
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent")
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder")
  * [IMTOrder::State](imtorder_state.md "State") (the state must correspond to a closed order: ORDER_STATE_CANCELED, ORDER_STATE_PARTIAL, ORDER_STATE_FILLED, ORDER_STATE_REJECTED or ORDER_STATE_EXPIRED)

  * [IMTOrder::TimeSetup](imtorder_timesetup.md "TimeSetup") or [IMTOrder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")
  * [IMTOrder::TimeDone](imtorder_timedonemsc.md "TimeDoneMsc") or [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc") (cannot be less than IMTOrder::TimeSetup/IMTOrder::TimeSetupMsc)

To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.