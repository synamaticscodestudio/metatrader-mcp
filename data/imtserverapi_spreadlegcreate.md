# SpreadLegCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Spreads ](serverapi_config_spread.md "Spreads")/ SpreadLegCreate | [](imtserverapi_spreadcreate.md "SpreadCreate") [](imtserverapi_spreadsubscribe.md "SpreadSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::SpreadLegCreate
Create an object of the configuration of a spread leg.
IMTConSpreadLeg* IMTServerAPI::SpreadLegCreate()  
---  
Return Value
It returns a pointer to the created object that implements [IMTConSpreadLeg](imtconspreadleg.md "IMTConSpreadLeg") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling [IMTConSpreadLeg::Release](imtconspreadleg_release.md "Release") method of this object.