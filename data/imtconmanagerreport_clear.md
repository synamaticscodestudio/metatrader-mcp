# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerReport ](imtconmanagerreport.md "IMTConManagerReport")/ Clear | [](imtconmanagerreport_assign.md "Assign") [](imtconmanagerreport_report.md "Report") |
| --- | --- | --- |
| --- | --- |

IMTConManagerReport::Clear
Clear an object.
C++
MTAPIRES IMTConManagerReport::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManagerReport.Clear()  
---  
Python (Manager API)
bool MTConManagerReport.Clear()  
---  
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.
Note
This method cleans all fields ​​and removes embedded objects.