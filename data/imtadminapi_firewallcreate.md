# FirewallCreate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Firewall ](imtadminapi_config_firewall.md "Functions")/ FirewallCreate | [](imtadminapi_config_firewall.md "Functions") [](imtadminapi_firewallsubscribe.md "FirewallSubscribe") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FirewallCreate
Create an object of the firewall configuration.
C++
IMTConFirewall* IMTAdminAPI::FirewallCreate()  
---  
.NET
CIMTConFirewall CIMTAdminAPI.FirewallCreate()  
---  
Return Value
It returns a pointer to the created object that implements the [IMTConFirewall](imtconfirewall.md "IMTConFirewall") interface. In case of failure, it returns NULL.
Note
The created object must be deleted by calling the [IMTConFirewall::Release](imtconfirewall_release.md "Release") method of this object.