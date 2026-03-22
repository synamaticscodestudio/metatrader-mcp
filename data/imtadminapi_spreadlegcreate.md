# SpreadLegCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Spreads ](imtadminapi_config_spread.md "Configuration of Spreads")/ SpreadLegCreate | [](imtadminapi_spreadcreate.md "SpreadCreate") [](imtadminapi_spreadsubscribe.md "SpreadSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::SpreadLegCreate
Create an object of the configuration of a spread leg.
C++
IMTConSpreadLeg* IMTAdminAPI::SpreadLegCreate()  
---  
.NET
CIMTConSpreadLeg CIMTAdminAPI.SpreadLegCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpreadLeg](imtconspreadleg.md "IMTConSpreadLeg") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpreadLeg::Release](imtconspreadleg_release.md "Release") method of this object.