# Server (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Server | [](imtconreportmodule_index.md "Index") [](imtconreportmodule_version.md "Version") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::Server
Get the ID of the server on which the dll-module of the report is stored physically.
C++
UINT64 IMTConReportModule::Server() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConReportModule.Server()  
---  
Python (Manager API)
MTConReportModule.Server  
---  
Return Value
The ID of the platform server, on which the dll-module of the plugin is stored physically.