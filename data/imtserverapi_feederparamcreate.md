# FeederParamCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederParamCreate | [](imtserverapi_feedermodulecreate.md "FeederModuleCreate") [](imtserverapi_feedertranslatecreate.md "FeederTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederParamCreate
Create an object of the parameter of the data feeds.
IMTConParam* IMTServerAPI::FeederParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.