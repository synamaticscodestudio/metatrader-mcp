# SpreadLegCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Spreads ](imtmanagerapi_config_spread.md "Configuration of Spreads")/ SpreadLegCreate | [](imtmanagerapi_spreadcreate.md "SpreadCreate") [](imtmanagerapi_spreadsubscribe.md "SpreadSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SpreadLegCreate
Create an object of the configuration of a spread leg.
C++
IMTConSpreadLeg* IMTManagerAPI::SpreadLegCreate()  
---  
.NET
CIMTConSpreadLeg CIMTManagerAPI.SpreadLegCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpreadLeg](imtconspreadleg.md "IMTConSpreadLeg") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpreadLeg::Release](imtconspreadleg_release.md "Release") method of this object.