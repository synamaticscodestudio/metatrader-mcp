# HistoryUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Orders ](serverapi_trading_order.md "Orders")/ HistoryUpdate | [](imtserverapi_historyaddbatcharray.md "HistoryAddBatchArray") [](imtserverapi_historyupdatebatch.md "HistoryUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::HistoryUpdate
Updates a closed trade order in the server data base.
MTAPIRES IMTServerAPI::HistoryUpdate( IMTOrder* order // An order object )  
---  
Parameters
order
[in] An object of a trading order.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
An order can be updated only from the plugins that run on the same trade server where the order was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
All required fields in the 'order' object must be filled, not only the ones that need to be changed. It is recommended that you first receive an order object from the server, change the required fields in it, and then send the changed object back to the server.
The server checks the correctness of the updated order. The following fields must be filled:
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
