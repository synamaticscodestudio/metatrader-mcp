# GroupSymbolCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Groups ](imtadminapi_config_group.md "Functions")/ GroupSymbolCreate | [](imtadminapi_groupcreate.md "GroupCreate") [](imtadminapi_groupcommissioncreate.md "GroupCommissionCreate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::GroupSymbolCreate
Create an object of [symbol](imtadminapi_config_symbol.md "Functions") configuration for a group.
C++
IMTConGroupSymbol* IMTAdminAPI::GroupSymbolCreate()  
---  
.NET
CIMTConGroupSymbol CIMTAdminAPI.GroupSymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroupSymbol](imtcongroupsymbol.md "IMTConGroupSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroupSymbol::Release](imtcongroupsymbol_release.md "Release") method of this object.