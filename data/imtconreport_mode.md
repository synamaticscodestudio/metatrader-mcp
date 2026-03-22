# Mode (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReport ](imtconreport.md "IMTConReport")/ Mode | [](imtconreport_module.md "Module") [](imtconreport_parameteradd.md "ParameterAdd") |
| --- | --- | --- |
| --- | --- |

IMTConReport::Mode
Get the report operation mode.
C++
UINT IMTConReport::Mode() const  
---  
.NET (Gateway/Manager API)
EnReportMode CIMTConReport.Mode()  
---  
Python (Manager API)
MTConReport.Mode  
---  
Return Value
A value of the [IMTConReport::EnReportMode](imtconreport_enum.htm#enreportmode) enumeration.
IMTConReport::Mode
Set the report operation mode.
C++
MTAPIRES IMTConReport::Mode( const UINT  mode // Operation mode )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReport.Mode( EnReportMode mode // Operation mode )  
---  
Python (Manager API)
MTConReport.Mode  
---  
Parameters
mode
[in] The [IMTConReport::EnReportMode](imtconreport_enum.htm#enreportmode) enumeration is used to pass the operation mode.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.