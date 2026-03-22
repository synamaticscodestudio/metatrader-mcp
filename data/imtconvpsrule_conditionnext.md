# ConditionNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ ConditionNext | [](imtconvpsrule_conditiontotal.md "ConditionTotal") [](imtconvpscondition.md "IMTConVPSCondition") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::ConditionNext
Get a condition in the VPS allocation rule by index.
C++
MTAPIRES IMTConVPSRule::ConditionNext( const UINT pos, // Condition position IMTConVPSCondition* cfg // Condition object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.ConditionNext( uint pos, // Condition position CIMTConVPSCondition cfg // Condition object )  
---  
Python
MTConVPSRule.ConditionNext( pos # Condition position )  
---  
MTConVPSRule.ConditionGet()  
---  
Parameters
pos
[in] Position of a condition in the list, starting from 0.
cfg
[out] [IMTConVPSCondition](imtconvpscondition.md "IMTConVPSCondition") condition object. The object must first be created using the [IMTServerAPI::VPSCreateCondition](imtserverapi_vpscreatecondition.md "VPSCreateCondition") or [IMTAdminAPI::VPSCreateCondition](imtadminapi_vpscreatecondition.md "VPSCreateCondition").
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.