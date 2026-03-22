# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerReport ](imtconmanagerreport.md "IMTConManagerReport")/ Assign | [](imtconmanagerreport_release.md "Release") [](imtconmanagerreport_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConManagerReport::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConManagerReport::Assign( const IMTConManagerReport* access // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManagerReport.Assign( CIMTConManagerReport access // Source object )  
---  
Parameters
access
[in] Source object.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.