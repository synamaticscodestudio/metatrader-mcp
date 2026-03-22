# ParameterAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReport ](imtconreport.md "IMTConReport")/ ParameterAdd | [](imtconreport_mode.md "Mode") [](imtconreport_parameterupdate.md "ParameterUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConReport::ParameterAdd
Add a report parameter.
C++
MTAPIRES IMTConReport::ParameterAdd( IMTConParam* param // An object of a report parameter )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReport.ParameterAdd( CIMTConParam param // An object of a report parameter )  
---  
Python (Manager API)
MTConReport.ParameterAdd( param # An object of a report parameter )  
---  
Parameters
param
[in] An object of a report parameter.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.