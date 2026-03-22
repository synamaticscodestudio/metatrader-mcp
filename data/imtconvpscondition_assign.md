# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ Assign | [](imtconvpscondition_release.md "Release") [](imtconvpscondition_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::Assign
Assign the passed object to the current one.
C++
MTAPIRES IMTConVPSCondition::Assign( const IMTConVPSCondition* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.Assign( CIMTConVPSCondition param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.