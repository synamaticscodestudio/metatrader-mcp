# FeederModuleCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederModuleCreate | [](imtserverapi_feedercreate.md "FeederCreate") [](imtserverapi_feederparamcreate.md "FeederParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederModuleCreate
Create an object of configuration of the data feed module.
IMTConFeederModule* IMTServerAPI::FeederModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeederModule](imtconfeedermodule.md "IMTConFeederModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object.