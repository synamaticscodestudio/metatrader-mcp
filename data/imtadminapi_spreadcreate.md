# SpreadCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadCreate | [](imtadminapi_config_spread.md "Configuration of Spreads") [](imtadminapi_spreadlegcreate.md "SpreadLegCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadCreate
Create an object of the configuration of a spread.
C++
IMTConSpread* IMTAdminAPI::SpreadCreate()  
---  
.NET
CIMTConSpread CIMTAdminAPI.SpreadCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpread](imtconspread.md "IMTConSpread") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpread::Release](imtconspread_release.md "Release") method of this object.