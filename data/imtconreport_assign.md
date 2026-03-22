# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReport ](imtconreport.md "IMTConReport")/ Assign | [](imtconreport_release.md "Release") [](imtconreport_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConReport::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConReport::Assign( const IMTConReport* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReport.Assign( CIMTConReport param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.