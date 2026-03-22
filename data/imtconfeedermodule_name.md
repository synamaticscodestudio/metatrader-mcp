# Name (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ Name | [](imtconfeedermodule_clear.md "Clear") [](imtconfeedermodule_vendor.md "Vendor") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::Name
Get the data feed name, which is inserted by default to a configuration when selecting this module.
C++
LPCWSTR IMTConFeederModule::Name() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederModule.Name()  
---  
Python (Manager API)
MTConFeederModule.Name  
---  
Return Value
If successful, it returns a pointer to a string with the default name of the data feed. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConModule](imtconfeedermodule.md "IMTConFeederModule") object.
To use the string after the object removal (call of the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object), a copy of it should be created.
The length of the name is limited to 128 characters (including the end-of-line character).