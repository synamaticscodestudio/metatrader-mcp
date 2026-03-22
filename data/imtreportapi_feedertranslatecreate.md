# FeederTranslateCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederTranslateCreate | [](imtreportapi_feederparamcreate.md "FeederParamCreate") [](imtreportapi_feedertotal.md "FeederTotal") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederTranslateCreate
Create an object of setup of converting the information transmitted from a data feed.
IMTConFeederTranslate* IMTReportAPI::FeederTranslateCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeederTranslate](imtconfeedertranslate.md "IMTConFeederTranslate") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeederTranslate::Release](imtconfeedertranslate_release.md "Release") method of this object.