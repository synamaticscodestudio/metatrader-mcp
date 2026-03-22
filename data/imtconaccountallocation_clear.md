# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ Clear | [](imtconaccountallocation_assign.md "Assign") [](imtconaccountallocation_group.md "Group") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::Clear
Clear an object.
C++
MTAPIRES IMTConAccountAllocation::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAllocation.Clear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method clears all field values and removes all nested objects.