# TierUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ TierUpdate | [](imtconleveragerule_tieradd.md "TierAdd") [](imtconleveragerule_tierdelete.md "TierDelete") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::TierUpdate
Update a level in a floating margin rule.
C++
MTAPIRES IMTConLeverageRule::TierUpdate( const UINT pos, // Level position IMTConLeverageTier* tier // Level object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.TierUpdate( uint pos, // Level position CIMTConLeverageTier tier // Level object )  
---  
Python (Manager API)
MTConLeverageRule.TierUpdate( pos, # Level position tier # Level object )  
---  
MTConLeverageRule.TierSet( tier_list # A list of levels )  
---  
Parameters
pos
[in] Position of the level in the list, starting from 0.
tier
[in] [IMTConLeverageTier](imtconleveragetier.md "IMTConLeverageTier") level object.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.