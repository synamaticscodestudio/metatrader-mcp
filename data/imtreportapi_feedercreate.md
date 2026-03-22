# FeederCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Data Feeds ](imtreportapi_config_datafeed.md "Functions")/ FeederCreate | [](imtreportapi_config_datafeed.md "Functions") [](imtreportapi_feedermodulecreate.md "FeederModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::FeederCreate
Create an object of the data feed configuration.
IMTConFeeder* IMTReportAPI::FeederCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeeder](imtconfeeder.md "MTConFeeder") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object.