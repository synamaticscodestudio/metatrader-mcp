# OrderReopen (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Orders ](imtadminapi_trading_order.md "Functions")/ OrderReopen | [](imtadminapi_orderbackuprestore.md "OrderBackupRestore") [](imtadminapi_historyrequest.md "HistoryRequest") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::OrderReopen
Reopens a pending order from the client history.
C++
MTAPIRES IMTAdminAPI::OrderReopen( const UINT64 ticket // The ticket of an order )  
---  
.NET
MTRetCode CIMTAdminAPI.OrderReopen( ulong ticket // The ticket of an order )  
---  
Python
AdminAPI.OrderReopen( int ticket # The ticket of an order )  
---  
Parameters
ticket
[in] Ticket of an order to be reopened.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Only [Limit, Stop and Stop Limit orders can be reopened](imtorder_enum.htm#enordertype). The order you want to reopen must exist in the client's history.
The method finds an order in the client's history and moves it to open orders:
  * Changes the order status to Placed ([IMTOrder::State](imtorder_state.md "State"))
  * Removes the execution date ([IMTOrder::TimeDone](imtorder_timedone.md "TimeDone"), [IMTOrder::TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc"))
  * Removes the execution price ([IMTOrder::PriceTrigger](imtorder_pricetrigger.md "PriceTrigger"))
  * Sets the current volume ([IMTOrder::VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent")) to the initial one ([IMTOrder::VolumeInitial](imtorder_volumeinitial.md "VolumeInitial"))
  * Resets the [IMTOrder::PositionID](imtorder_positionid.md "PositionID") field to zero
  * Clears activation signs: [IMTOrder::ActivationTime](imtorder_activationtime.md "ActivationTime"), [IMTOrder::ActivationPrice](imtorder_activationprice.md "ActivationPrice") and [IMTOrder::ActivationMode](imtorder_activationmode.md "ActivationMode")

Before reopening a previously triggered order, you should properly correct the state of the client's trading positions and account:
  * Delete the [trade](imtdeal.md "IMTDeal"), which was opened in accordance with the order. If several trades were performed in connection with the order, delete all of them.
  * Fix the client's positions ([IMTAdminAPI::PositionFix](imtadminapi_positionfix.md "PositionFix")).
  * Fix the client's balance ([IMTAdminAPI::UserBalanceCheck](imtadminapi_userbalancecheck.md "UserBalanceCheck")).

After the above actions, the client's state will correspond to the history of orders.