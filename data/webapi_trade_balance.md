# Deposit/Withdrawal (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Trading ](webapi_trading.md "Trading") / [ Trade Requests ](webapi_trade.md "Trade Requests")/ Deposit/Withdrawal | [](webapi_trade_data_structure.md "Data Structure") [](webapi_trade_rate_buy.md "Calculate Conversion Rate for Buy") |
| --- | --- | --- |
| --- | --- |

Deposit/Withdrawal
This request allows to conduct balance operations on client accounts.
Request format
GET /api/trade/balance?login=login&type=type&balance=sum&comment=comment POST /api/trade/balance?login=login&type=type&balance=sum&comment=comment  
---  
Response format
{ "retcode" : "code description", "answer" : { "Ticket" : "ticket" } }  
---  
Example
//--- request to the server GET /api/trade/balance?login=764636&type=2&balance=1000&comment=onlinedeposit //--- server response { "retcode" : "0 Done", "answer" : { "Ticket" : "136623" } }  
---  
Request Parameters
  * login — the login of an account for which a balance operation should be conducted.
  * type — type of the balance operation. Specified as a value of the [EnDealAction](imtdeal_enum.htm#endealaction) enumeration:

  * 2 — a balance operation.
  * 3 — a credit operation.
  * 4 — additional adding/withdrawing.
  * 5 — corrective operations.
  * 6 — adding bonuses.
  * balance — the amount to change the balance. To add money, set a positive value. To withdraw money, set a negative value.
  * comment — a comment to a balance operation. The maximum comment length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut 
  * check_margin — if the value of this parameter is 1, the free margin is checked before conducting the balance operation. If the amount withdraw is greater than the free margin value, error 10019 is returned. If the parameter is set to zero, the margin is not checked and the requested amount will be withdrawn even if it's greater then the free margin. If the parameter is not passed, the check is considered enabled.

Response Parameters
  * retcode — if successful, the command returns [a response code](retcodes_successful.md "Successful completion") 0\. Otherwise, it will return an error code.
  * ticket — ticket of a [deal](webapi_deal.md "Deals") the balance operation has been performed by.

Notes
  * Balance operations are conducted as [deals](webapi_deal.md "Deals").
  * In case the deal type is incorrect, the code [3](retcodes_common.md "Common errors") is returned.
  * An amount of money accrued/withdrawn with a single operation cannot exceed 1000000000. In case this value is exceeded, the code [4005](retcodes_trades.md "Trade management") will be returned.
  * An amount of withdrawal cannot exceed the current free margin. In case this amount is exceeded the code [10019](retcodes_trade_request.md "Trade Requests") is returned.
  * An amount of withdrawal during a credit operation (TYPE=3) cannot exceed the amount of previously issued credit assets. In case this amount is exceeded the code [10019](retcodes_trade_request.md "Trade Requests") is returned.
  * An amount of withdrawal during any balance operation cannot exceed the current balance. In case this amount is exceeded the code [10019](retcodes_trade_request.md "Trade Requests") is returned.
