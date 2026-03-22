# GroupSymbolCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupSymbolCreate | [](imtmanagerapi_groupcreatearray.md "GroupCreateArray") [](imtmanagerapi_groupcommissioncreate.md "GroupCommissionCreate") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupSymbolCreate
Create an object of [symbol](config_symbol.md "Symbols") configuration for a group.
C++
IMTConGroupSymbol* IMTManagerAPI::GroupSymbolCreate()  
---  
.NET
CIMTConGroupSymbol CIMTManagerAPI.GroupSymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroupSymbol](imtcongroupsymbol.md "IMTConGroupSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroupSymbol::Release](imtcongroupsymbol_release.md "Release") method of this object.