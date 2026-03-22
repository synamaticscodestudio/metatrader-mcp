# FeedLogin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ FeedLogin | [](imtconfeedermodule_feedserver.md "FeedServer") [](imtconfeedermodule_feedpassword.md "FeedPassword") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::FeedLogin
Get a default login that will be used by a data feed to connect to the server.
C++
LPCWSTR IMTConFeederModule::FeedLogin() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederModule.FeedLogin()  
---  
Python (Manager API)
MTConFeederModule.FeedLogin  
---  
Return Value
If successful, it returns a pointer to a string with the default login, which will be used by the data feed to connect to the server. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConModule](imtconfeedermodule.md "IMTConFeederModule") object.
To use the string after the object removal (call of the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object), a copy of it should be created.
The maximum login length is 64 characters (including the end-of-line character).