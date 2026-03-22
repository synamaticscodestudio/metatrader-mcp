# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPS ](imtconvps.md "IMTConVPS")/ Clear | [](imtconvps_assign.md "Assign") [](imtconvps_flags.md "Flags") |
| --- | --- | --- |
| --- | --- |

IMTConVPS::Clear
Clear an object.
C++
MTAPIRES IMTConVPS::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPS.Clear()  
---  
Return Value
An indication of a successful execution is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method cleans all fields ​​and removes embedded objects.