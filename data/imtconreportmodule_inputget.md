# InputGet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Reports ](config_report.md "Report Configuration") / [ IMTConReportModule ](imtconreportmodule.md "IMTConReportModule")/ InputGet | [](imtconreportmodule_inputnext.md "InputNext") [](imtconreportsink.md "IMTConReportSink") |
| --- | --- | --- |
| --- | --- |

IMTConReportModule::InputGet
Get the parameter of a report request by the name.
C++
MTAPIRES IMTConReportModule::InputGet( LPCWSTR name, // Parameter name IMTConParam* param // An object of the parameter ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConReportModule.InputGet( string name, // Parameter name CIMTConParam param // An object of the parameter )  
---  
Python (Manager API)
MTConReportModule.InputGet()  
---  
Parameters
name
[in] Parameter Name.
param
[out] An object of the parameter. The 'param' object must first be created using the [IMTAdminAPI::ReportParamCreate](imtadminapi_reportparamcreate.md "ReportParamCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Parameters are set when requesting reports of the module from a manager terminal.
The [IMTConParam::Name](imtconparam_name.md "Name") value is used as the parameter name.