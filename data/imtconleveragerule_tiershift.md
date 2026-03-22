# TierShift (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ TierShift | [](imtconleveragerule_tierclear.md "TierClear") [](imtconleveragerule_tiertotal.md "TierTotal") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::TierShift
Move a level in a floating margin rule.
C++
MTAPIRES IMTConLeverageRule::TierShift( const UINT pos, // Level position const int shift // Shift )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConLeverageRule.TierShift( uint pos, // Level position int  shift // Shift )  
---  
Python (Manager API)
MTConLeverageRule.TierShift( pos, # Level position shift # Shift )  
---  
Parameters
pos
[in] Position of the level in the list, starting from 0.
shift
[in] Level shift relative to the current position. A negative value means shift towards the top of the list, while a positive value shifts the item towards the end.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.