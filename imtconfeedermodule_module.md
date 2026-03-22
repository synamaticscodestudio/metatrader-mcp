# Module (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ Module | [](imtconfeedermodule_description.md "Description") [](imtconfeedermodule_feedserver.md "FeedServer") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::Module
Get the name of the file of the data feed module.
C++
LPCWSTR IMTConFeederModule::Module() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederModule.Module()  
---  
Python (Manager API)
MTConFeederModule.Module  
---  
Return Value
If successful, it returns a pointer to a string with the file name of the data feed module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConModule](imtconfeedermodule.md "IMTConFeederModule") object.
To use the string after the object removal (call of the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object), a copy of it should be created.
The length of the symbol name is limited to 64 characters (including the end-of-line character).