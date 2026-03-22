# Module (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Module | [](imtconreportmodule_description.md "Description") [](imtconreportmodule_index.md "Index") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::Module
Get the name of the file of a report module.
C++
LPCWSTR IMTConReportModule::Module() const  
---  
.NET (Gateway/Manager API)
string CIMTConReportModule.Module()  
---  
Python (Manager API)
MTConReportModule.Module  
---  
Return Value
If successful, it returns a pointer to a string with the file name of the report module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") object.
To use the line after the object removal (call of the [IMTConReportModule::Release](imtconreportmodule_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 64 characters (including the end-of-line character).