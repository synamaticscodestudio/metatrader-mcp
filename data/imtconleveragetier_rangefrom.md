# RangeFrom (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageTier ](imtconleveragetier.md "IMTConLeverageTier")/ RangeFrom | [](imtconleveragetier_clear.md "Clear") [](imtconleveragetier_rangeto.md "RangeTo") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageTier::RangeFrom
Get the minimum range value for a level in a floating margin rule.
C++
double IMTConLeverageTier::RangeFrom() const  
---  
.NET (Gateway/Manager API)
double CIMTConLeverageTier.RangeFrom()  
---  
Python (Manager API)
MTConLeverageTier.RangeFrom  
---  
Return Value
The minimum range value for a level in a floating margin rule. The range type is determined by the [IMTConLeverageRule::RangeMode](imtconleveragerule_rangemode.md "RangeMode") method.
IMTConLeverageTier::RangeFrom
Set the minimum range value for a level in a floating margin rule.
C++
MTAPIRES IMTConLeverageTier::RangeFrom( const double value // Minimum value )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageTier.RangeFrom( double value // Minimum value )  
---  
Python (Manager API)
MTConLeverageTier.RangeFrom  
---  
Parameters
value
[in] The minimum range value for a level in a floating margin rule. The range type is determined by the [IMTConLeverageRule::RangeMode](imtconleveragerule_rangemode.md "RangeMode") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.