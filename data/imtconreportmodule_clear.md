# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Clear | [](imtconreportmodule_assign.md "Assign") [](imtconreportmodule_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::Clear
Clear an object.
C++
MTAPIRES IMTConReportModule::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReportModule.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.