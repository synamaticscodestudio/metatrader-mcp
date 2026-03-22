# RuleNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ RuleNext | [](imtconvps_ruletotal.md "RuleTotal") [](imtconvps_groupadd.md "GroupAdd") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::RuleNext
Getting the VPS allocation rule by index in the list.
C++
MTAPIRES IMTConVPS::RuleNext( const UINT pos, // Rule position IMTConVPSRule* rule  // Rule object ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.RuleNext( uint pos, // Rule position CIMTConVPSRule rule // Rule object )  
---  
Python
MTConVPS.RuleNext( pos # Rule position )  
---  
MTConVPS.RuleGet()  
---  
Parameters
pos
[in] Rule position in the list starting from 0.
rule
[out] [IMTConVPSRule](imtconvpsrule.md "IMTConVPSRule") rule object. The object must first be created using the [IMTServerAPI::VPSCreateRule](imtserverapi_vpscreaterule.md "VPSCreateRule") or [IMTAdminAPI::VPSCreateRule](imtadminapi_vpscreaterule.md "VPSCreateRule") method.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.