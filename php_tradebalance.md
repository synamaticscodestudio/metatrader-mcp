# TradeBalance (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ PHP Implementation of Protocol ](php.md "Protocol Implementation in PHP") / [ MTWebAPI Class ](mtwebapi.md "MTWebAPI Class") / [ Trade ](php_trade.md "Trade")/ TradeBalance | [](php_trade.md "Trade") [](php_mail.md "Mailbox") |
| --- | --- | --- |
| --- | --- |

MTWebAPI::TradeBalance
Conduct balance operations on an account.
MTAPIRES MTWebAPI::TradeBalance( int $login, // Login MTEnDealAction $type, // Type of operation double $balance, // Amount string $comment, // Comment int &$ticket=null // Balance deal ticket bool $margin_check=true // Margin check )  
---  
Parameters
$login
[in] The login of a client.
$type
[in] Type of the balance operation. Passed using the following values of the [EnDealAction](imtdeal_enum.htm#endealaction) enumeration:
  * DEAL_BALANCE — a balance operation.
  * DEAL_CREDIT — a credit operation.
  * DEAL_CHARGE — additional adding/withdrawing.
  * DEAL_CORRECTION — corrective operations.
  * DEAL_BONUS — adding bonuses.

$balance
[in] The amount to add to an account or subtract from it (negative value).
$comment
[in] A comment to a balance operation.
$ticket=null
[out] Ticket of the balance deal.
$margin_check=true
[in] If the value of this parameter is true, the free margin is checked before conducting the balance operation. If the amount withdraw is greater than the free margin value, error [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned. If the parameter is set to false, the margin is not checked and the requested amount will be withdrawn even if it's greater then the free margin. If the parameter is not passed, the check is considered enabled.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Notes
  * Balance operations are conducted as [deals](php_deal.md "Deals").
  * In case the deal type is incorrect, the code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
  * An amount of money accrued/withdrawn with a single operation cannot exceed 1000000000. In case this value is exceeded, the code [MT_RET_TRADE_MAX_MONEY](retcodes_trades.md "Trade management") is returned.
  * An amount of withdrawal cannot exceed the current free margin. In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
  * An amount of withdrawal during a credit operation (TYPE=DEAL_CREDIT) cannot exceed the amount of previously issued credit assets. In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
  * An amount of withdrawal during any balance operation cannot exceed the current balance. In case this amount is exceeded the code [MT_RET_REQUEST_NO_MONEY](retcodes_trade_request.md "Trade Requests") is returned.
  * The string specifying the comment must be passed in the UTF-8 format.
