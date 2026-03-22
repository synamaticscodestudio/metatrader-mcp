# FeederTranslateCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederTranslateCreate | [](imtserverapi_feederparamcreate.md "FeederParamCreate") [](imtserverapi_feedersubscribe.md "FeederSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederTranslateCreate
Create an object of setup of converting the information transmitted from a data feed.
IMTConFeederTranslate* IMTServerAPI::FeederTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeederTranslate](imtconfeedertranslate.md "IMTConFeederTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeederTranslate::Release](imtconfeedertranslate_release.md "Release") method of this object.