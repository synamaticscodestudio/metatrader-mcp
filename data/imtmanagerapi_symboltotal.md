# SymbolTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Symbols ](imtmanagerapi_config_symbol.md "Symbols")/ SymbolTotal | [](imtmanagerapi_symbolupdatebatch.md "SymbolUpdateBatch") [](imtmanagerapi_symbolnext.md "SymbolNext") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::SymbolTotal
The total number of symbol configurations available in the platform.
C++
UINT IMTManagerAPI::SymbolTotal()  
---  
.NET
uint CIMTManagerAPI.SymbolTotal()  
---  
Python
ManagerAPI.SymbolTotal()  
---  
Return Value
The number of symbol configurations in the trading platform.
Note
The method is valid only if the [IMTManagerAPI::PUMP_MODE_SYMBOLS](imtmanagerapi_enpumpmodes.md "Pumping Mode") pumping mode was specified during connection.