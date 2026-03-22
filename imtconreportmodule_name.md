# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Name | [](imtconreportmodule_clear.md "Clear") [](imtconreportmodule_vendor.md "Vendor") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::Name
Get the report name, which is inserted by default to a configuration when selecting this module.
C++
LPCWSTR IMTConReportModule::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConReportModule.Name()  
---  
Python (Manager API)
MTConReportModule.Name  
---  
Return Value
If successful, it returns a pointer to a string with the default name of a report. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") object.
To use the line after the object removal (call of the [IMTConReportModule::Release](imtconreportmodule_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 64 characters (including the end-of-line character).