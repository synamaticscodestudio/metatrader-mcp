# RangeTo (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageTier ](imtconleveragetier.md "IMTConLeverageTier")/ RangeTo | [](imtconleveragetier_rangefrom.md "RangeFrom") [](imtconleveragetier_marginrateinitial.md "MarginRateInitial") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageTier::RangeTo
Get the maximum range value for a level in a floating margin rule.
C++
double IMTConLeverageTier::RangeTo() const  
---  
.NET (Gateway/Manager API)
double CIMTConLeverageTier.RangeTo()  
---  
Python (Manager API)
MTConLeverageTier.RangeTo  
---  
Return Value
The maximum range value for a level in a floating margin rule. The range type is determined by the [IMTConLeverageRule::RangeMode](imtconleveragerule_rangemode.md "RangeMode") method.
IMTConLeverageTier::RangeTo
Set the maximum range value for a level in a floating margin rule.
C++
MTAPIRES IMTConLeverageTier::RangeTo( const double value // Maximum value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageTier.RangeTo( double value // Maximum value )  
---  
Python (Manager API)
MTConLeverageTier.RangeTo  
---  
Parameters
value
[in] The maximum range value for a level in a floating margin rule. The range type is determined by the [IMTConLeverageRule::RangeMode](imtconleveragerule_rangemode.md "RangeMode") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.