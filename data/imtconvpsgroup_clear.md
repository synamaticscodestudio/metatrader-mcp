# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSGroup ](imtconvpsgroup.md "IMTConVPSGroup")/ Clear | [](imtconvpsgroup_assign.md "Assign") [](imtconvpsgroup_group.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTConVPSGroup::Clear
Clear an object.
C++
MTAPIRES IMTConVPSGroup::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSGroup.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.