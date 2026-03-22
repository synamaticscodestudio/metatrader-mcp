# OrderUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderUpdateBatch | [](imtadminapi_orderupdate.md "OrderUpdate") [](imtadminapi_orderupdatebatcharray.md "OrderUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderUpdateBatch
Update multiple orders in a server database.
C++
MTAPIRES IMTAdminAPI::OrderUpdateBatch( IMTOrderArray* orders, // Array of orders MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderUpdateBatch( CIMTOrderArray orders, // Array of orders MTRetCode[] res // Array of results )  
---  
Python
AdminAPI.OrderUpdateBatch( orders # Array of orders )  
---  
Parameters
orders
[in] A pointer to the array of orders [IMTOrderArray](imtorderarray.md "IMTOrderArray").
results
[out] An array with order update results. The size of the 'results' array must not be less than that of 'orders'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all orders have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the orders have been updated. Analyze the 'results' array for more details concerning the execution results. The result of update of each order from the 'orders' array is added to 'results'. The index of a result corresponds to the index of an order in the source array.
Note
Orders can only be updated from the applications connected to the trade server, on which the orders have been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
All required fields of orders must be filled in, not only the ones which you want to change It is recommended that you first receive orders from the server, change the required fields in them and then send them back to the server.
The server checks the correctness of the updated orders. The following fields must be filled:
  * [IMTOrder::Login](imtorder_login.md "Login")
  * [IMTOrder::Symbol](imtorder_login.md "Login")
  * [IMTOrder::Type](imtorder_type.md "Type")

  * [IMTOrder::Digits](imtorder_digits.md "Digits")
  * [IMTOrder::DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency")
  * [IMTOrder::ContractSize](imtorder_contractsize.md "ContractSize")

  * [IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial")
  * [IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent")
  * [IMTOrder::PriceOrder](imtorder_priceorder.md "PriceOrder")
  * [IMTOrder::State](imtorder_state.md "State")
  * [IMTOrder::TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc")
  * [IMTOrder::TimeDone](imtorder_timedone.md "TimeDone") or [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc") (for closed orders)

To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.