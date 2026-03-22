# Reopen Order (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Orders ](webapi_orders.md "Orders")/ Reopen Order | [](webapi_order_backup_restore.md "Restore from Backup") [](webapi_deal.md "Deals") |
| --- | --- | --- |
| --- | --- |

Reopen an Order
The request allows reopening a pending order from the account history.
Request Format
GET /api/order/reopen?ticket=ticket POST /api/order/reopen?ticket=ticket  
---  
Response Format
{ "retcode" : "code description", "answer" : { description } }  
---  
Example
//--- request to the server GET /api/order/reopen?ticket=12832917 //--- server response { "retcode" : "0 Done", "answer" : {  "Order" : "12832917", "ExternalID" : "", "Login" : "104366", ... } }  
---  
Request Parameters
  * ticket — the ticket of the order to be reopened.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.
  * answer — recovered order parameters in JSON format. The full description of order parameters is available under the [Data Structure](webapi_order_data_structure.md "Data Structure") section.

Note
Only [Limit, Stop and Stop Limit orders can be reopened](imtorder_enum.htm#enordertype). The order you want to reopen must exist in the client's history.
The request finds an order in the account history and moves it to open orders while updating its [parameters](webapi_order_data_structure.md "Data Structure"):
  * Changes the order state to Placed (State)
  * Deletes the execution date (TimeDone, TimeDoneMsc)
  * Deletes the trigger price (PriceTrigger)
  * Resets the current volume (VolumeCurrent) to the initial (VolumeInitial)
  * Zeroes PositionID
  * Resets activation signs: ActivationTime, ActivationPrice and ActivationMode

Before reopening a previously triggered order, you should properly correct the state of the client's trading positions and account:
  * Delete the [trade](webapi_deal.md "Deals"), which was opened in accordance with the order. If several trades were performed in connection with the order, delete all of them.
  * Correct the client's positions ([/api/position/fix](webapi_position_fix.md "Fix Position")).
  * Correct the client's balance ([/api/user/check_balance](webapi_user_balance_check.md "Check Balance")).

After the above actions, the client's state will correspond to the history of orders.