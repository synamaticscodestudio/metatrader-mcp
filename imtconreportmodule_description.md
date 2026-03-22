# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Description | [](imtconreportmodule_vendor.md "Vendor") [](imtconreportmodule_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::Description
Get the description of a report module.
C++
LPCWSTR IMTConReportModule::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConReportModule.Description()  
---  
Python (Manager API)
MTConReportModule.Description  
---  
Return Value
If successful, it returns a pointer to a string with the description of a report module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") object.
To use the line after the object removal (call of the [IMTConReportModule::Release](imtconreportmodule_release.md "Release") method of this object), a copy of it should be created.
The maximum description length is 256 characters (with the sign of the string end).