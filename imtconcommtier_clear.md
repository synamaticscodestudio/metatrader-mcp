# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommTier ](imtconcommtier.md "IMTConCommTier")/ Clear | [](imtconcommtier_assign.md "Assign") [](imtconcommtier_mode.md "Mode") |
| --- | --- | --- |
| --- | --- |

IMTConCommTier::Clear
Clear an object.
C++
MTAPIRES IMTConCommTier::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommTier.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.