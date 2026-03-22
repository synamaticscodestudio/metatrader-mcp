# DigitsSet (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ DigitsSet | [](imtrequest_digits.md "Digits") [](imtrequest_action.md "Action") |
| --- | --- | --- |
| --- | --- |

IMTRequest::DigitsSet
Sets the number of decimal places in the trade request price.
C++
MTAPIRES IMTRequest::DigitsSet( const UINT digits // Number of decimal places )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.DigitsSet( uint digits // Number of decimal places )  
---  
Program Parameters
digits
[in] The number of decimal places in the trade request price.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.