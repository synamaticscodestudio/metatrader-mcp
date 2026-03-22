# ParameterGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ ParameterGet | [](imtconreportmodule_parameternext.md "ParameterNext") [](imtconreportmodule_inputtotal.md "InputTotal") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::ParameterGet
Get a report module parameter by its name.
C++
MTAPIRES IMTConReportModule::ParameterGet( LPCWSTR name, // Parameter name IMTConParam* param // An object of a report parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReportModule.ParameterGet( string name, // Parameter name CIMTConParam param // An object of a report parameter )  
---  
Python (Manager API)
MTConReportModule.ParameterGet()  
---  
Parameters
name
[in] Parameter Name.
param
[out] An object of a report parameter. The 'param' object must first be created using the [IMTAdminAPI::ReportParamCreate](imtadminapi_reportparamcreate.md "ReportParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The [IMTConParam::Name](imtconparam_name.md "Name") value is used as the parameter name.