# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Network ](config_network.md "Network") / [ IMTConServerHistory ](imtconserverhistory.md "IMTConServerHistory")/ Clear | [](imtconserverhistory_assign.md "Assign") [](imtconserverhistory_datafeedstimeout.md "DatafeedsTimeout") |
| --- | --- | --- |
| --- | --- |

IMTConServerHistory::Clear
Clear an object.
C++
void IMTConServerHistory::Clear()  
---  
.NET (Gateway/Manager API)
void CIMTConServerHistory.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.