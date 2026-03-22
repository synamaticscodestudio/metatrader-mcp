# FeederCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Data Feeds ](imtadminapi_config_datafeed.md "Functions")/ FeederCreate | [](imtadminapi_config_datafeed.md "Functions") [](imtadminapi_feedermodulecreate.md "FeederModuleCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FeederCreate
Create an object of the data feed configuration.
C++
IMTConFeeder* IMTAdminAPI::FeederCreate()  
---  
.NET
CIMTConFeeder CIMTAdminAPI.FeederCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFeeder](imtconfeeder.md "MTConFeeder") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConFeeder::Release](imtconfeeder_release.md "Release") method of this object.