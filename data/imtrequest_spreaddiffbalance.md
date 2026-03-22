# SpreadDiffBalance (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ SpreadDiffBalance | [](imtrequest_spreaddiff.md "SpreadDiff") [](imtrequest_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTRequest::SpreadDiffBalance
Get the spread difference balance specified for the trader group.
C++
INT IMTRequest::SpreadDiffBalance() const  
---  
.NET (Gateway/Manager API)
int CIMTRequest.SpreadDiffBalance()  
---  
Return Value
Spread difference balance.
Note
The server copies the value from the settings specified in the trader group ([IMTConGroupSymbols::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance")) at the time the request is formed. You can use this property when forwarding requests to the exchange via the Gateway API, to inform the exchange about the platform-side price markup if such information is required by the exchange rules.
The value is defined as an offset relative to the equal division of the spread difference value ([IMTConGroupSymbol::SpreadDiff)](imtcongroupsymbol_spreaddiff.md "SpreadDiff") between Bid and Ask. For example, if the spread difference is 4, then its distribution in the ratio -2 Bid/+2 Ask will correspond to the spread difference balance value of 0. The ratio -3 Bid/+1 Ask corresponds to the value -1, the ratio -1 Bid/+3 Ask corresponds to the value 1. If the spread difference value is odd, the zero value of the spread difference balance corresponds to an even distribution of the difference between Bid and Ask, with an offset towards Bid by one unit. For example, if the spread difference is equal to 3, the zero spread difference balance will correspond to the ratio -2 Bid/+1 Ask. 
The following price difference formulas are used for Bid and Ask prices:
  * New Bid = Bid - Point*((SpreadDiff+1)/2 - SpreadDiffBalance).
  * New Ask = Ask + Point*(SpreadDiff/2 + SpreadDiffBalance).

The formulas use integer division.
IMTRequest::SpreadDiffBalance
Set the spread difference balance in a trade request.
C++
MTAPIRES IMTRequest::SpreadDiffBalance( const INT spread // spread difference balance )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.SpreadDiffBalance( const INT spread // spread difference balance )  
---  
Parameters
spread
[in] Spread difference balance.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Do not change the value of this property unless absolutely necessary. It is only used to notify the exchange about the platform-side price difference value.