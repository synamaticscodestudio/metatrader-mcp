# FeederTranslateCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederTranslateCreate | [](imtadminapi_feederparamcreate.md "FeederParamCreate") [](imtadminapi_feedersubscribe.md "FeederSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederTranslateCreate
Create an object of setup of converting the information transmitted from a data feed.
C++
IMTConFeederTranslate* IMTAdminAPI::FeederTranslateCreate()  
---  
.NET
CIMTConFeederTranslate CIMTAdminAPI.FeederTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeederTranslate](imtconfeedertranslate.md "IMTConFeederTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeederTranslate::Release](imtconfeedertranslate_release.md "Release") method of this object.