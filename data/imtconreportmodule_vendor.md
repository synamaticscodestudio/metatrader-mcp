# Vendor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Vendor | [](imtconreportmodule_name.md "Name") [](imtconreportmodule_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::Vendor
Get the name of the report module provider.
C++
LPCWSTR IMTConReportModule::Vendor() const  
---  
.NET (Gateway/Manager API)
string CIMTConReportModule.Vendor()  
---  
Python (Manager API)
MTConReportModule.Vendor  
---  
Return Value
If successful, it returns a pointer to a string with the name of the report module provider. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConReportModule](imtconreportmodule.md "IMTConReportModule") object.
To use the line after the object removal (call of the [IMTConReportModule::Release](imtconreportmodule_release.md "Release") method of this object), a copy of it should be created.
The maximum name length is 64 characters (including the end-of-line character).