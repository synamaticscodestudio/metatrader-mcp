# FeederModuleCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederModuleCreate | [](imtreportapi_feedercreate.md "FeederCreate") [](imtreportapi_feederparamcreate.md "FeederParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederModuleCreate
Create an object of configuration of the data feed module.
IMTConFeederModule* IMTReportAPI::FeederModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeederModule](imtconfeedermodule.md "IMTConFeederModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object.