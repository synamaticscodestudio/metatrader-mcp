# FirewallNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Firewall ](serverapi_config_firewall.md "Firewall")/ FirewallNext | [](imtserverapi_firewalltotal.md "FirewallTotal") [](serverapi_config_symbol.md "Symbols") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FirewallNext
Get the firewall configuration by the index.
MTAPIRES IMTServerAPI::FirewallNext( const UINT pos, // Position of the configuration IMTConFirewall* config // Comment )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
config
[out] An object of the firewall configuration. The feeder object must be first created using the [FIMTServerAPI::FirewallCreate](imtserverapi_firewallcreate.md "FirewallCreate") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This method copies the firewall configuration entry with a specified index to the config object.