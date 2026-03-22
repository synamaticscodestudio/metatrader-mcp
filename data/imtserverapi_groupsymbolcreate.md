# GroupSymbolCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Groups ](serverapi_config_group.md "Groups")/ GroupSymbolCreate | [](imtserverapi_groupcreate.md "GroupCreate") [](imtserverapi_groupcommissioncreate.md "GroupCommissionCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::GroupSymbolCreate
Create an object of [symbol](config_symbol.md "Symbols") configuration for a group.
IMTConGroupSymbol* IMTServerAPI::GroupSymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroupSymbol](imtcongroupsymbol.md "IMTConGroupSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroupSymbol::Release](imtcongroupsymbol_release.md "Release") method of this object.