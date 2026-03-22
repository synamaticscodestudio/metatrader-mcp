# SpreadDiff (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTRequest ](imtrequest.md "IMTRequest")/ SpreadDiff | [](imtrequest_pricedeviationbottom.md "PriceDeviationBottom") [](imtrequest_spreaddiffbalance.md "SpreadDiffBalance") |
| --- | --- | --- |
| --- | --- |

IMTRequest::SpreadDiff
Get the difference between the symbol spread for the group to which the trader belongs and the current symbol spread (price markup for the group).
C++
INT IMTRequest::SpreadDiff() const  
---  
.NET (Gateway/Manager API)
int CIMTRequest.SpreadDiff()  
---  
Return Value
Symbol spread difference.
Note
The server copies the value from the settings specified in the trader group ([IMTConGroupSymbols::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff")) at the time the request is formed. You can use this property when forwarding requests to the exchange via the Gateway API, to inform the exchange about the platform-side price markup if such information is required by the exchange rules.
Group-level price transforming settings ([IMTConGroupSymbol::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff") and [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance")) are applied after the application of basic symbol settings ([IMTConSymbol::Spread](imtconsymbol_spread.md "Spread") and [IMTConSymbol::SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")).
IMTRequest::SpreadDiff
Set the difference between the symbol spread for the group to which the trader belongs and the current symbol spread.
C++
MTAPIRES IMTRequest::SpreadDiff( const INT spread // spread difference )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTRequest.SpreadDiff( int spread // spread difference )  
---  
Parameters
spread
[in] Symbol spread difference.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Do not change the value of this property unless absolutely necessary. It is only used to notify the exchange about the platform-side price difference value.