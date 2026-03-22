# SpreadDiff (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroupSymbol ](imtcongroupsymbol.md "IMTConGroupSymbol")/ SpreadDiff | [](imtcongroupsymbol_expirflagsdefault.md "ExpirFlagsDefault") [](imtcongroupsymbol_spreaddiffdefault.md "SpreadDiffDefault") |
| --- | --- | --- |
| --- | --- |

IMTConGroupSymbol::SpreadDiff
Get a difference between a symbol spread for the group and [the default spread](imtconsymbol_spread.md "Spread").
C++
INT IMTConGroupSymbol::SpreadDiff() const  
---  
.NET (Gateway/Manager API)
int CIMTConGroupSymbol.SpreadDiff()  
---  
Python (Manager API)
MTConGroupSymbol.SpreadDiff  
---  
Return Value
Symbol spread difference.
Note
Price conversion settings for the group ([IMTConGroupSymbol::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff") and [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance")) are applied after basic symbol settings ([IMTConSymbol::Spread](imtconsymbol_spread.md "Spread") and [IMTConSymbol::SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")).
IMTConGroupSymbol::SpreadDiff
Set a difference between a symbol spread for the group and [the default spread](imtconsymbol_spread.md "Spread").
C++
MTAPIRES IMTConGroupSymbol::SpreadDiff( const INT spread // Spread difference )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroupSymbol.SpreadDiff( int spread // Spread difference )  
---  
Python (Manager API)
MTConGroupSymbol.SpreadDiff  
---  
Parameters
spread
[in] Symbol spread difference.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Price conversion settings for the group ([IMTConGroupSymbol::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff") and [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance")) are applied after basic symbol settings ([IMTConSymbol::Spread](imtconsymbol_spread.md "Spread") and [IMTConSymbol::SpreadBalance](imtconsymbol_spreadbalance.md "SpreadBalance")).