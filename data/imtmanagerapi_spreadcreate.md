# SpreadCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Spreads ](imtmanagerapi_config_spread.md "Configuration of Spreads")/ SpreadCreate | [](imtmanagerapi_config_spread.md "Configuration of Spreads") [](imtmanagerapi_spreadlegcreate.md "SpreadLegCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SpreadCreate
Create an object of the configuration of a spread.
C++
IMTConSpread* IMTManagerAPI::SpreadCreate()  
---  
.NET
CIMTConSpread CIMTManagerAPI.SpreadCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpread](imtconspread.md "IMTConSpread") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpread::Release](imtconspread_release.md "Release") method of this object.