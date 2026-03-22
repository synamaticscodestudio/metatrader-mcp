# RangeMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ RangeMode | [](imtconleveragerule_path.md "Path") [](imtconleveragerule_rangevaluecurrency.md "RangeValueCurrency") |
| --- | --- | --- |
| --- | --- |

IMTConSubscription::RangeMode
Get the level type for a rule in a floating margin configuration.
C++
UINT IMTConSubscription::RangeMode() const  
---  
.NET (Gateway/Manager API)
EnControlMode CIMTConSubscription.RangeMode()  
---  
Python (Manager API)
MTConSubscription.RangeMode  
---  
Return Value
Level type in a rule. Passed as a value of the [IMTConLeverageRule::EnRangeMode](imtconleveragerule_enum.htm#enrangemode) enumeration.
IMTConSubscription::RangeMode
Set the level type for a rule in a floating margin configuration.
C++
MTAPIRES IMTConSubscription::RangeMode( const UINT mode  // Level type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConSubscription.RangeMode( EnControlMode  mode // Level type )  
---  
Python (Manager API)
MTConSubscription.RangeMode  
---  
Parameters
mode
[in] Level type in the rule. Passed as a value of the [IMTConLeverageRule::EnRangeMode](imtconleveragerule_enum.htm#enrangemode) enumeration.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.