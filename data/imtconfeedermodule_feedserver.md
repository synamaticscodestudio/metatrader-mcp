# FeedServer (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ FeedServer | [](imtconfeedermodule_module.md "Module") [](imtconfeedermodule_feedlogin.md "FeedLogin") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::FeedServer
Get the default address of the server to which the data feed module will connect.
C++
LPCWSTR IMTConFeederModule::FeedServer() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederModule.FeedServer()  
---  
Python (Manager API)
MTConFeederModule.FeedServer  
---  
Return Value
If successful, it returns a pointer to a string with the default address of the server to which the data feed module will connect. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConModule](imtconfeedermodule.md "IMTConFeederModule") object.
To use the string after the object removal (call of the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object), a copy of it should be created.
The maximum length of the address is 128 characters (including the sign of the string end).