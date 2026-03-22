# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ Clear | [](imtcongroup_assign.md "Assign") [](imtcongroup_group.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::Clear
Clear an object.
C++
MTAPIRES IMTConGroup::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.