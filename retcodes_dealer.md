# Dealer (MetaTrader5SDK)

|  | [ Return Codes ](reference_retcodes.md "Return Codes")/ Dealer | [](retcodes_trade_request.md "Trade Requests") [](retcodes_api.md "API") |
| --- | --- | --- |
| --- | --- |

Dealer
This group of codes is returned by the server during dealer's actions:
| Constant | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| MT_RET_REQUEST_RETURN | 11000 | Request returned to the queue. |
| MT_RET_REQUEST_DONE_CANCEL | 11001 | Request has been partially filled, the remainder has been canceled. |
| MT_RET_REQUEST_REQUOTE_RETURN | 11002 | The request has been requoted and returned to the queue with new prices. |