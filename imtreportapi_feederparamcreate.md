# FeederParamCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederParamCreate | [](imtreportapi_feedermodulecreate.md "FeederModuleCreate") [](imtreportapi_feedertranslatecreate.md "FeederTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederParamCreate
Create an object of the parameter of the data feeds.
IMTConParam* IMTReportAPI::FeederParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.