# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReport ](imtconreport.md "IMTConReport")/ Clear | [](imtconreport_assign.md "Assign") [](imtconreport_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConReport::Clear
Clear an object.
C++
MTAPIRES IMTConReport::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReport.Clear()  
---  
Python (Manager API)
MTConReport.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.