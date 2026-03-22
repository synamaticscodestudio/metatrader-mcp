# FeederParamCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederParamCreate | [](imtadminapi_feedermodulecreate.md "FeederModuleCreate") [](imtadminapi_feedertranslatecreate.md "FeederTranslateCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederParamCreate
Create an object of the parameter of the data feeds.
C++
IMTConParam* IMTAdminAPI::FeederParamCreate()  
---  
.NET
CIMTConParam CIMTAdminAPI.FeederParamCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConParam](imtconparam.md "IMTConParam") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConParam::Release](imtconparam_release.md "Release") method of this object.