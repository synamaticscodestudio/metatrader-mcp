# FeederCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Data Feeds ](serverapi_config_datafeeds.md "Data Feeds")/ FeederCreate | [](serverapi_config_datafeeds.md "Data Feeds") [](imtserverapi_feedermodulecreate.md "FeederModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FeederCreate
Create an object of the data feed configuration.
IMTConFeeder* IMTServerAPI::FeederCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeeder](imtconfeeder.md "MTConFeeder") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object.