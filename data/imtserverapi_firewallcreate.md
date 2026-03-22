# FirewallCreate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Firewall ](serverapi_config_firewall.md "Firewall")/ FirewallCreate | [](serverapi_config_firewall.md "Firewall") [](imtserverapi_firewallsubscribe.md "FirewallSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FirewallCreate
Create an object of the firewall configuration.
IMTConFirewall* IMTServerAPI::FirewallCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFirewall](imtconfirewall.md "IMTConFirewall") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConFirewall::Release](imtconfirewall_release.md "Release") method of this object.