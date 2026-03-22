# GroupSymbolCreate (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface") / [ Configuration Databases ](imtreportapi_config.md "Configuration Databases") / [ Groups ](imtreportapi_config_group.md "Groups")/ GroupSymbolCreate | [](imtreportapi_groupcreate.md "GroupCreate") [](imtreportapi_groupcommissioncreate.md "GroupCommissionCreate") |
| --- | --- | --- |
| --- | --- |

IMTReportAPI::GroupSymbolCreate
Create an object of [symbol](config_symbol.md "Symbols") configuration for a group.
IMTConGroupSymbol* IMTReportAPI::GroupSymbolCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConGroupSymbol](imtcongroupsymbol.md "IMTConGroupSymbol") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTConGroupSymbol::Release](imtcongroupsymbol_release.md "Release") method of this object.