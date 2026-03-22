# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ Assign | [](imtconreportmodule_release.md "Release") [](imtconreportmodule_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConReportModule::Assign( const IMTConReportModule* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReportModule.Assign( CIMTConReportModule param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.