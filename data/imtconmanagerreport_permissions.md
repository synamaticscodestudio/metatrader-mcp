# Permissions (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Managers ](config_manager.md "Managers") / [ IMTConManagerReport ](imtconmanagerreport.md "IMTConManagerReport")/ Permissions | [](imtconmanagerreport_report.md "Report") [](imtconmanagerreport_limitdays.md "LimitDays") |
| --- | --- | --- |
| --- | --- |

IMTConManagerReport::Permissions
Get report access permissions.
C++
UINT64 IMTConManagerReport::Permissions() const  
---  
.NET (Gateway/Manager API)
EnPermissionsFlags CIMTConManagerReport.Permissions()  
---  
Python (Manager API)
MTConManagerReport.Permissions  
---  
Return Value
A value from the [IMTConManagerReport::EnPermissionsFlags](imtconmanagerreport_enum.htm#enpermissionsflags) enumeration.
IMTConManagerReport::Permissions
Set report access permissions.
C++
MTAPIRES IMTConManagerReport::Permissions( const UINT64 permissions // Manager permissions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConManagerReport.Permissions( EnPermissionsFlags permissions // Manager permissions )  
---  
Python (Manager API)
MTConManagerReport.Permissions  
---  
Parameters
permissions
[in] Report access permissions are passed using the [IMTConManagerReport::EnPermissionsFlags](imtconmanagerreport_enum.htm#enpermissionsflags) enumeration.
Return Value
An indication of a successful performance is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code occurred.