# Ratio (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ Ratio | [](imtconspreadleg_timeto.md "TimeTo") [](imtconspreadleg_ratiodbl.md "RatioDbl") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadLeg::Ratio
Getting symbol volume ratio (weight) in a spread leg.
C++
UINT64 IMTConSpreadLeg::Ratio() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConSpreadLeg.Ratio()  
---  
Python (Manager API)
MTConSpreadLeg.Ratio  
---  
Return Value
Symbol volume ratio (weight) in a spread leg.
IMTConSpreadLeg::Ratio
Setting symbol volume ratio (weight) in a spread leg.
C++
MTAPIRES IMTConSpreadLeg::Ratio( const UINT64 ratio // volume ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpreadLeg.Ratio( ulong ratio // volume ratio )  
---  
Python (Manager API)
MTConSpreadLeg.Ratio  
---  
Parameters
open
[in] Symbol volume ratio (weight) in a spread leg.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Several symbols can be configured for each leg. A volume ratio at this spread leg can be specified for each of them.
Example:
  * leg A consists of GAZR-9.12 and GAZR-3.13 symbols having the ratios of 1 and 2 respectively
  * leg B consists of GAZR-6.13 having the ratio of 1.

To keep the client's positions in the spread, the client should open positions of 1 and 2 lots for GAZR-9.12 and GAZR-3.13 respectively to one direction and position of 1 lot for GAZR-6.13 to another direction.