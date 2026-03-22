# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ Clear | [](imtconvpsrule_assign.md "Assign") [](imtconvpsrule_enabled.md "Enabled") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::Clear
Clear an object.
C++
MTAPIRES IMTConVPSRule::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.Clear()  
---  
Python
MTConVPSRule.Clear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.