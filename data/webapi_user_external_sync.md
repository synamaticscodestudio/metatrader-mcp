# Sync with External System (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Users ](webapi_users.md "Users")/ Sync with External System | [](webapi_user_otp_secret_set.md "Set OTP Key") [](webapi_user_balance_check.md "Check Balance") |
| --- | --- | --- |
| --- | --- |

Sync User Trading Status with External System
The request allows synchronizing trading account status with an external trading system. During the request call, [IMTGatewaySink::HookGatewayAccountRequest](imtgatewaysink_hookgatewayaccountrequest.md "HookGatewayAccountRequest") is called in Gateway API. If provided by the developer or the gateway via which the client is trading, the MetaTrader 5 client's trading status will be brought in line with an external trading system when this request is executed.
Request format
GET /api/user/sync_external?login=login&gateway=identifier&account=account&sync_mode=mode POST /api/user/sync_external?login=login&gateway=identifier&account=account&sync_mode=mode  
---  
Response format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server GET /api/user/sync_external?login=13699&gateway=12&account=96833311&sync_mode=19 //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
  * login — the login of the user whose status should be synchronized.
  * gateway — [gateway ID](imtcongateway_id.md "ID"). The gateway iD is associated with the account number in the external system.
  * account — client account in the external system.
  * sync_mode — synchronization mode:

  *     * 19 — full synchronization of trading status including current pending orders, open positions and balance.
    * 46 — balance synchronization.
    * 36 — synchronization of open positions.
    * 31 — synchronization of current pending orders.

Response Parameters
  * retcode — if successful, the command returns [the response code ](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Note
  * This request works only if trading status synchronization is provided at the gateway used by the client.
  * Correcting operations are created as a result of trading data synchronization. These operations are displayed in the client's trading history.
  * No matter what data is sent by the gateway in response to the method call (orders, positions, balance), the server will apply the changes according to synchronization mode specified in sync_mode parameter.
