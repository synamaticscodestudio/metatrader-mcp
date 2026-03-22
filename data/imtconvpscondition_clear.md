# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSCondition ](imtconvpscondition.md "IMTConVPSCondition")/ Clear | [](imtconvpscondition_assign.md "Assign") [](imtconvpscondition_condition.md "Condition") |
| --- | --- | --- |
| --- | --- |

IMTConVPSCondition::Clear
Clear an object.
C++
MTAPIRES IMTConVPSCondition::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSCondition.Clear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.