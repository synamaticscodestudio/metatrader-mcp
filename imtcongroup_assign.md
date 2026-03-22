# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ Assign | [](imtcongroup_release.md "Release") [](imtcongroup_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConGroup::Assign( const IMTConGroup* group // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.Assign( CIMTConGroup group // Source object )  
---  
Parameters
group
Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.