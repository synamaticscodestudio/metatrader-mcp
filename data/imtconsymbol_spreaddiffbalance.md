# SpreadDiffBalance (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Symbols ](config_symbol.md "Symbols") / [ IMTConSymbol ](imtconsymbol.md "IMTConSymbol")/ SpreadDiffBalance | [](imtconsymbol_spreaddiff.md "SpreadDiff") [](imtconsymbol_tickvalue.md "TickValue") |
| --- | --- | --- |
| --- | --- |

IMTConSymbol::SpreadDiffBalance
Get the balance of spread difference.
C++
INT IMTConSymbol::SpreadDiffBalance() const  
---  
.NET (Gateway/Manager API)
int CIMTConSymbol.SpreadDiffBalance()  
---  
Python (Manager API)
MTConSymbol.SpreadDiffBalance  
---  
Return Value
Balance of spread difference. This parameter is used to set individual spread balance values ​​for certain groups of clients.
Note
This method returns the base value of the balance of spread difference, which is actually equal to 0. To work with the balance of spread difference of a certain group, the [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance") method should be used.
The following formulas are used:
  * If SpreadDiff > 0: New Bid = Bid - Point*(SpreadDiff - Int(SpreadDiff/2) - SpreadDiffBalance).
  * If SpreadDiff < 0: New Bid = Bid - Point*(SpreadDiff - Int(SpreadDiff/2) + SpreadDiffBalance).
  * New Ask = New Bid + Point((Ask - Old Bid)/Point + SpreadDiff)

Integer division is used in the formulas.
Price conversion settings for the group ([IMTConGroupSymbol::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff") and [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance")) are applied after basic symbol settings ([IMTConSymbol::Spread](imtconsymbol_spread.md "Spread") and [IMTConSymbol::SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")).
IMTConSymbol::SpreadDiffBalance
Set the balance of spread difference.
C++
MTAPIRES IMTConSymbol::SpreadDiffBalance( const INT spread // Spread difference balance )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSymbol.SpreadDiffBalance( int spread // Spread difference balance )  
---  
Python (Manager API)
MTConSymbol.SpreadDiffBalance  
---  
Parameters
spread
[in] Spread difference balance
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method sets the base value of the balance of spread difference. To set the individual spread balance value for certain groups of clients, the [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance") method is used.
The following formulas are used:
  * If SpreadDiff > 0: New Bid = Bid - Point*(SpreadDiff - Int(SpreadDiff/2) - SpreadDiffBalance).
  * If SpreadDiff < 0: New Bid = Bid - Point*(SpreadDiff - Int(SpreadDiff/2) + SpreadDiffBalance).
  * New Ask = New Bid + Point((Ask - Old Bid)/Point + SpreadDiff)

Integer division is used in the formulas.
Price conversion settings for the group ([IMTConGroupSymbol::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff") and [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance")) are applied after basic symbol settings ([IMTConSymbol::Spread](imtconsymbol_spread.md "Spread") and [IMTConSymbol::SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")).