# TierDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ TierDelete | [](imtconleveragerule_tierupdate.md "TierUpdate") [](imtconleveragerule_tierclear.md "TierClear") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::TierDelete
Delete a level from a floating margin rule.
C++
MTAPIRES IMTConLeverageRule::TierDelete( const UINT pos // Level position )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.TierDelete( uint pos // Level position )  
---  
Python (Manager API)
MTConLeverageRule.TierDelete( pos # Level position )  
---  
Parameters
pos
[in] Position of the level in the list, starting from 0.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.