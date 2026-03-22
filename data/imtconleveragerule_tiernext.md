# TierNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Floating Margin ](config_leverage.md "Floating Margin") / [ IMTConLeverageRule ](imtconleveragerule.md "IMTConLeverageRule")/ TierNext | [](imtconleveragerule_tiertotal.md "TierTotal") [](imtconleveragetier.md "IMTConLeverageTier") |
| --- | --- | --- |
| --- | --- |

IMTConLeverageRule::TierNext
Get a level from floating margin rules by index.
C++
LPCWSTR IMTConLeverageRule::TierNext( const UINT pos // Level position IMTConLeverageTier* tier // Level object ) const  
---  
.NET (Gateway/Manager API)
string CIMTConLeverageRule.TierNext( uint pos, // Level position CIMTConLeverageTier tier // Level object )  
---  
Python (Manager API)
MTConLeverageRule.TierNext( pos # Level position )  
---  
MTConLeverageRule.TierGet()  
---  
Parameters
pos
[in] Position of the rule in the list.
tier
[out] [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule") rule object. The object must be created in advance using the [IMTServerAPI::LeverageTierCreate](imtserverapi_leveragetiercreate.md "LeverageTierCreate"), [IMTAdminAPI::LeverageTierCreate](imtadminapi_leveragetiercreate.md "LeverageTierCreate"), or [IMTManagerAPI::LeverageTierCreate](imtmanagerapi_leveragetiercreate.md "LeverageTierCreate") method.
Return Value
An indication of a successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.