# TierAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ TierAdd | [](imtconleveragerule_rangevaluecurrency.md "RangeValueCurrency") [](imtconleveragerule_tierupdate.md "TierUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::TierAdd
Add a level to a floating margin rule.
C++
MTAPIRES IMTConLeverageRule::TierAdd( IMTConLeverageTier* tier // Level object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.TierAdd( CIMTConLeverageTier tier // Level object )  
---  
Python (Manager API)
MTConLeverageRule.TierAdd( tier # Level object )  
---  
Parameters
tier
[in] [IMTConLeverageTier](imtconleveragetier.md "IMTConLeverageTier") level object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.