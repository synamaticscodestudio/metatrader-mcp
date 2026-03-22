# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSGroup ](imtconvpsgroup.md "IMTConVPSGroup")/ Assign | [](imtconvpsgroup_release.md "Release") [](imtconvpsgroup_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConVPSGroup::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConVPSGroup::Assign( const IMTConVPSGroup* param // source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSGroup.Assign( CIMTConVPSGroup param // source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.