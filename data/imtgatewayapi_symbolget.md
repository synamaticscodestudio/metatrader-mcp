# SymbolGet (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Configuration Databases ](imtgatewayapi_config.md "Configuration databases") / [ Symbols ](imtgatewayapi_config_symbol.md "Functions")/ SymbolGet | [](imtgatewayapi_symbolnext.md "SymbolNext") [](imtgatewayapi_config_group.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::SymbolGet
Gets the symbol configuration by the name.
C++
MTAPIRES IMTGatewayAPI::SymbolGet( LPCWSTR name, // Name of the configuration IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolGet( string name, // Name of the configuration CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Parameters
name
[in] The name of the configuration.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTGatewatAPI::SymbolCreate](imtgatewayapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method returns a symbol configuration with default trade settings.
If [translation settings](gatewayapi_translation.md "Symbol and Price Translation") are configured for a gateway, several symbols in the trading platforms can correspond to every symbol in the external system. For example, two copies of the original EURUSD symbol can be passed to the platform for different groups of clients, as EURUSD.1 and EURUSD.2. Also one copy with a different name can be passed to the platform.
There is no need for the gateway developer to care about how symbols are passed to the platform when using the SymbolGet method, because Gateway API automatically checks translation settings:
  * If a symbol with the name matching the symbol name in the external system is found in the platform, SymbolGet will return the configuration of the original symbol.
  * If there is no such symbol in the platform, the first translation setting corresponding to the original symbol will be used. For example, if for the original EURUSD symbol two settings are available, EURUSD.1 and EURUSD.2, SymbolGet(EURUSD,symbol) will return the configuration of EURUSD.1.
  * During the call of SymbolGet(name,group,symbol), the availability of a symbol for the group is additionally checked. If a symbol with the original name exists in the platform and it is available to the specified group, the method will return its configuration. Otherwise, a symbol from the first translation setting corresponding to the original symbol will be used. If it is available to the specified group, the method will return its settings. If it is not available, the next setting will be used, etc.

IMTGatewayAPI::SymbolGet
Get symbol settings taking into account that they are overridden for the specified group.
C++
MTAPIRES IMTGatewayAPI::SymbolGet( LPCWSTR name, // Name of the configuration LPCWSTR name_group, // Group name IMTConSymbol* symbol // An object of the symbol configuration )  
---  
.NET
MTRetCode CIMTGatewayAPI.SymbolGet( string name, // Name of the configuration string name_group, // Group name CIMTConSymbol symbol // An object of the symbol configuration )  
---  
Parameters
name
[in] The name of the configuration.
name_group
[in] Group name.
symbol
[out] An object of the symbol configuration. The symbol object must be first created using the [IMTGatewatAPI::SymbolCreate](imtgatewayapi_symbolcreate.md "SymbolCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The method returns a symbol configuration with trade settings for the specified group. The [IMTConGroup::Group](imtcongroup_group.md "Group") value is used as the group name.
If [translation settings](gatewayapi_translation.md "Symbol and Price Translation") are configured for a gateway, several symbols in the trading platforms can correspond to every symbol in the external system. For example, two copies of the original EURUSD symbol can be passed to the platform for different groups of clients, as EURUSD.1 and EURUSD.2. Also one copy with a different name can be passed to the platform.
There is no need for the gateway developer to care about how symbols are passed to the platform when using the SymbolGet method, because Gateway API automatically checks translation settings:
  * If a symbol with the name matching the symbol name in the external system is found in the platform, SymbolGet will return the configuration of the original symbol.
  * If there is no such symbol in the platform, the first translation setting corresponding to the original symbol will be used. For example, if for the original EURUSD symbol two settings are available, EURUSD.1 and EURUSD.2, SymbolGet(EURUSD,symbol) will return the configuration of EURUSD.1.
  * During the call of SymbolGet(name,group,symbol), the availability of a symbol for the group is additionally checked. If a symbol with the original name exists in the platform and it is available to the specified group, the method will return its configuration. Otherwise, a symbol from the first translation setting corresponding to the original symbol will be used. If it is available to the specified group, the method will return its settings. If it is not available, the next setting will be used, etc.
