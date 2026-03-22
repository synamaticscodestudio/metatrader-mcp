# FeederModuleCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederModuleCreate | [](imtadminapi_feedercreate.md "FeederCreate") [](imtadminapi_feederparamcreate.md "FeederParamCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederModuleCreate
Create an object of configuration of the data feed module.
C++
IMTConFeederModule* IMTAdminAPI::FeederModuleCreate()  
---  
.NET
CIMTConFeederModule CIMTAdminAPI.FeederModuleCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeederModule](imtconfeedermodule.md "IMTConFeederModule") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object.