# ResultVolume (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ ResultVolume | [](imtrequest_resultorder.md "ResultOrder") [](imtrequest_resultvolumeext.md "ResultVolumeExt") |
| --- | --- | --- |
| --- | --- |

IMTRequest::ResultVolume
Gets the deal volume confirmed by a dealer for this request.
C++
UINT64 IMTRequest::ResultVolume() const  
---  
.NET (Gateway/Manager API)
ulong CIMTRequest.ResultVolume()  
---  
Return Value
The volume of a deal confirmed by a dealer for this request, in the UINT64 format (one unit corresponds to 1/10,000 of the lot).
The return value can be 0 if the request is not processed, or if volume is not specified as a result of its confirmation.
Note
This field is used in cases where a dealer specified a volume when processing a request ([IMTRequest::EnTradeActions](imtrequest_enum.htm#entradeactions) enumeration):
  * TA_REQUEST — a request for placing a market order in the request execution mode.
  * TA_INSTANT — a trade operation in the instant execution mode.
  * TA_MARKET — a trade operation in the market execution mode.
  * TA_EXCHANGE — a trade operation in the exchange execution mode.
  * TA_ACTIVATE — order activation.
  * TA_ACTIVATE_SL — closing a position after reaching the Stop Loss level.
  * TA_ACTIVATE_TP — closing a position after reaching the Take Profit level.
  * TA_STOPOUT_POSITION — forced closure of a position when reaching the Stop Out level.
  * TA_DEALER_POS_EXECUTE — execution of a trade operation by a dealer.
  * TA_DEALER_ORD_ACTIVATE — order activation by a dealer.

The method operates with [the standard volume accuracy](features.htm#volume) (4 decimal places). For extended volume accuracy, use the [IMTRequest::ResultVolumeExt](imtrequest_resultvolumeext.md "ResultVolumeExt") method.