# ReportParamCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Reports ](imtadminapi_config_report.md "Functions")/ ReportParamCreate | [](imtadminapi_reportmodulecreate.md "ReportModuleCreate") [](imtadminapi_reportsubscribe.md "ReportSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::ReportParamCreate
Create an object of a report parameter.
C++
IMTConParam* IMTAdminAPI::ReportParamCreate()  
---  
.NET
CIMTConParam CIMTAdminAPI.ReportParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.