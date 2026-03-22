# ParameterClear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReport ](imtconreport.md "IMTConReport")/ ParameterClear | [](imtconreport_parameterdelete.md "ParameterDelete") [](imtconreport_parametershift.md "ParameterShift") |
| --- | --- | --- |
| --- | --- |

IMTConReport::ParameterClear
Clear the list of report parameters.
C++
MTAPIRES IMTConReport::ParameterClear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReport.ParameterClear()  
---  
Python (Manager API)
MTConReport.ParameterClear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method clears the entire list of report parameters.