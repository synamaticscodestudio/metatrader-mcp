# MarginMaintenance (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpread ](imtconspread.md "IMTConSpread")/ MarginMaintenance | [](imtconspread_margininitial.md "MarginInitial") [](imtconspread_alegadd.md "ALegAdd") |
| --- | --- | --- |
| --- | --- |

IMTConSpread::MarginMaintenance
Getting the value of the parameter for setting a maintenance margin.
C++
LPCWSTR IMTConSpread::MarginMaintenance() const  
---  
.NET (Gateway/Manager API)
string CIMTConSpread.MarginMaintenance()  
---  
Python (Manager API)
MTConSpread.MarginMaintenance  
---  
Return Value
The value of the parameter for setting a maintenance margin.
IMTConSpread::MarginMaintenance
Setting the value of the parameter for setting a maintenance margin.
C++
MTAPIRES IMTConSpread::MarginMaintenance( LPCWSTR path // The value for setting a maintenance margin )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpread.MarginMaintenance( string path // The value for setting a maintenance margin )  
---  
Python (Manager API)
MTConSpread.MarginMaintenance  
---  
Parameters
path
[in] The value of the parameter for setting a maintenance margin.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
According to the margin charging type ([IMTConSpread:MarginType](imtconspread_margintype.md "MarginType")), different values are specified in this method:
  * MARGIN_TYPE_VALUE — the values of the maintenance margin that will be charged at the specified combination of positions;
  * MARGIN_TYPE_MAXIMAL — the value is not specified ([IMTConSpread::MarginMaintenance](imtconspread_marginmaintenance.md "MarginMaintenance") method is not used);
  * MARGIN_TYPE_CME_INTER — maintenance margin ratio (multiplier). The total margin value will be defined by summing up the margin requirements for all symbols of the spread (by [IMTConSymbol::MarginMaintenance](imtconsymbol_margininitial.md "MarginInitial") value or the appropriate value redefined for [client group](imtcongroupsymbol.md "IMTConGroupSymbol")) and multiplying the total value by the specified ratio;
  * MARGIN_TYPE_CME_INTRA — the difference between the total margin of A leg symbols and the total margin of B leg symbols is calculated (the difference in absolute magnitude is used, so that it does matter what leg is a deductible one). The value specified in [IMTConSpread::MarginMaintenance](imtconspread_marginmaintenance.md "MarginMaintenance") parameter is added to the obtained difference.
