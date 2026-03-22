# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ Assign | [](imtconvpsrule_release.md "Release") [](imtconvpsrule_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::Assign
Assign the passed object to the current one.
C++
MTAPIRES IMTConVPSRule::Assign( const IMTConVPSRule* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.Assign( CIMTConVPSRule param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.