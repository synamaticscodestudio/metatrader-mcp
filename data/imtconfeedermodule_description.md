# Description (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds") / [ IMTConFeederModule ](imtconfeedermodule.md "IMTConFeederModule")/ Description | [](imtconfeedermodule_vendor.md "Vendor") [](imtconfeedermodule_module.md "Module") |
| --- | --- | --- |
| --- | --- |

IMTConFeederModule::Description
Get the description of the data feed module.
C++
LPCWSTR IMTConFeederModule::Description() const  
---  
.NET (Gateway/Manager API)
string CIMTConFeederModule.Description()  
---  
Python (Manager API)
MTConFeederModule.Description  
---  
Return Value
If successful, it returns a pointer to a string with the description of the data feed module. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConModule](imtconfeedermodule.md "IMTConFeederModule") object.
To use the string after the object removal (call of the [IMTConFeederModule::Release](imtconfeedermodule_release.md "Release") method of this object), a copy of it should be created.
The description length is limited to 512 characters (including the end-of-line character).