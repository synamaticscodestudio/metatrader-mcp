# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerRange ](imtconserverrange.md "IMTConServerRange")/ Clear | [](imtconserverrange_assign.md "Assign") [](imtconserverrange_from.md "From") |
| --- | --- | --- |
| --- | --- |

IMTConServerRange::Clear
Clear an object.
C++
MTAPIRES IMTConServerRange::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConServerRange.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.