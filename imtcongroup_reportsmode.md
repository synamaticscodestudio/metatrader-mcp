# ReportsMode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConGroup ](imtcongroup.md "IMTConGroup")/ ReportsMode | [](imtcongroup_currencydigitsset.md "CurrencyDigitsSet") [](imtcongroup_reportsflags.md "ReportsFlags") |
| --- | --- | --- |
| --- | --- |

IMTConGroup::ReportsMode
Get the mode of report generation.
C++
UINT IMTConGroup::ReportsMode() const  
---  
.NET (Gateway/Manager API)
EnReportsMode CIMTConGroup.ReportsMode()  
---  
Python (Manager API)
MTConGroup.ReportsMode  
---  
Return Value
A value from the [IMTConGroup::EnReportsMode](imtcongroup_enum.htm#enreportsmode) enumeration.
IMTConGroup::ReportsMode
Set the mode of report generation.
C++
MTAPIRES IMTConGroup::ReportsMode( const UINT mode // Report generation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConGroup.ReportsMode( EnReportsMode mode // Report generation mode )  
---  
Python (Manager API)
MTConGroup.ReportsMode  
---  
Parameters
mode
[in] The report generation mode is passed using the [IMTConGroup::EnReportsMode](imtcongroup_enum.htm#enreportsmode) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.