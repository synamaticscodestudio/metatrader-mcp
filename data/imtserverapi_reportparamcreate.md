# ReportParamCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Reports ](serverapi_config_report.md "Report Configuration")/ ReportParamCreate | [](imtserverapi_reportmodulecreate.md "ReportModuleCreate") [](imtserverapi_reportsubscribe.md "ReportSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::ReportParamCreate
Create an object of a report parameter.
IMTConParam* IMTServerAPI::ReportParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.