# Vendor (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ Vendor | [](imtconfeedermodule_name.md "Name") [](imtconfeedermodule_description.md "Description") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::Vendor
Get the name of the provider of the data feed module.
C++
LPCWSTR IMTConFeederModule::Vendor() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederModule.Vendor()  
---  
Python (Manager API)
MTConFeederModule.Vendor  
---  
Return Value
If successful, it returns a pointer to a string with the name of the provider of the data feed module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConModule](imtconfeedermodule.md "IMTConFeederModule") object.
To use the string after the object removal (call of the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object), a copy of it should be created.
The length of the provider's name is limited to 128 characters (including the end-of-line character).