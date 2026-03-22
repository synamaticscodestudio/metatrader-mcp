# FeedPassword (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ FeedPassword | [](imtconfeedermodule_feedlogin.md "FeedLogin") [](imtconfeedermodule_version.md "Version") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::FeedPassword
Get a default password that will be used by a data feed to connect to the server.
C++
LPCWSTR IMTConFeederModule::FeedPassword() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederModule.FeedPassword()  
---  
Python (Manager API)
MTConFeederModule.FeedPassword  
---  
Return Value
If successful, it returns a pointer to a string with the default password, which will be used by the data feed to connect to the server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConModule](imtconfeedermodule.md "IMTConFeederModule") object.
To use the string after the object removal (call of the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object), a copy of it should be created.
The maximum password length is 64 characters (including the end-of-line character).