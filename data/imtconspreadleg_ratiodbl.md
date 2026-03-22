# RatioDbl (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Spreads ](config_spread.md "Spreads") / [ IMTConSpreadLeg ](imtconspreadleg.md "IMTConSpreadLeg")/ RatioDbl | [](imtconspreadleg_ratio.md "Ratio") [](imtconspreadsink.md "IMTConSpreadSink") |
| --- | --- | --- |
| --- | --- |

IMTConSpreadLeg::RatioDbl
Getting symbol volume ratio (weight) in a spread leg as a Double value.
C++
double IMTConSpreadLeg::RatioDbl() const  
---  
.NET (Gateway/Manager API)
double CIMTConSpreadLeg.RatioDbl()  
---  
Python (Manager API)
MTConSpreadLeg.RatioDbl  
---  
Return Value
Symbol volume ratio (weight) in a spread leg.
IMTConSpreadLeg::RatioDbl
Setting symbol volume ratio (weight) in a spread leg as a Double value.
C++
MTAPIRES IMTConSpreadLeg::RatioDbl( const double ratio // Volume ratio )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSpreadLeg.RatioDbl( double ratio // Volume ratio )  
---  
Python (Manager API)
MTConSpreadLeg.RatioDbl  
---  
Parameters
open
[in] Symbol volume ratio (weight) in a spread leg as a Double value.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Several symbols can be configured for each leg. A volume ratio at this spread leg can be specified for each of them.
Example:
  * leg A consists of GAZR-9.12 and GAZR-3.13 symbols having the ratios of 1.00000 and 2.00000 respectively
  * leg B consists of GAZR-6.13 symbol having the ratio of 1.00000.

To keep the client's positions in the spread, the client should open positions of 1 and 2 lots for GAZR-9.12 and GAZR-3.13 respectively to one direction and position of 1 lot for GAZR-6.13 to another direction.