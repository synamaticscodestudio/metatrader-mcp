# ReportsFlags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ ReportsFlags | [](imtcongroup_reportsmode.md "ReportsMode") [](imtcongroup_reportsemail.md "ReportsEmail") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::ReportsFlags
Get the options of reports sending.
C++
UINT64 IMTConGroup::ReportsFlags() const  
---  
.NET (Gateway/Manager API)
EnReportsFlags CIMTConGroup.ReportsFlags()  
---  
Python (Manager API)
MTConGroup.ReportsFlags  
---  
Return Value
A value from the [IMTConGroup::EnReportsFlags](imtcongroup_enum.htm#enreportsflags) enumeration.
IMTConGroup::ReportsFlags
Set the options of sending reports.
C++
MTAPIRES IMTConGroup::ReportsFlags( const UINT64 flags // Options of reports sending )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.ReportsFlags( EnReportsFlags flags // Options of reports sending )  
---  
Python (Manager API)
MTConGroup.ReportsFlags  
---  
Parameters
flags
[in] The [IMTConGroup::EnReportsFlags](imtcongroup_enum.htm#enreportsflags) enumeration is used to pass report sending options.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.