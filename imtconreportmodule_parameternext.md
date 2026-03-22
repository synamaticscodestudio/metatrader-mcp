# ParameterNext (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ ParameterNext | [](imtconreportmodule_parametertotal.md "ParameterTotal") [](imtconreportmodule_parameterget.md "ParameterGet") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::ParameterNext
Get report module parameters by the index.
C++
MTAPIRES IMTConReportModule::ParameterNext( const UINT pos, // Position of the plugin IMTConParam* param // An object of a report parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReportModule.ParameterNext( uint pos, // Position of the plugin CIMTConParam param // An object of a report parameter )  
---  
Python (Manager API)
MTConReportModule.ParameterNext( pos # Position of the plugin )  
---  
Parameters
pos
[in] Position of the report, starting with 0.
param
[out] An object of a report parameter. The 'param' object must first be created using the [IMTAdminAPI::ReportParamCreate](imtadminapi_reportparamcreate.md "ReportParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the parameters of a report module with a specified index to the param object.