# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ Clear | [](imtconcommission_assign.md "Assign") [](imtconcommission_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::Clear
Clear an object.
C++
MTAPIRES IMTConCommission::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.Clear()  
---  
Python (Manager API)
bool MTConCommission.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.