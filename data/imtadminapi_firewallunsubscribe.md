# FirewallUnsubscribe (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Firewall ](imtadminapi_config_firewall.md "Functions")/ FirewallUnsubscribe | [](imtadminapi_firewallsubscribe.md "FirewallSubscribe") [](imtadminapi_firewallupdate.md "FirewallUpdate") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::FirewallUnsubscribe
Unsubscribe from events associated with the firewall configuration.
C++
MTAPIRES IMTAdminAPI::FirewallUnsubscribe( IMTConFirewallSink* sink // A pointer to the IMTConFirewallSink object )  
---  
.NET
MTRetCode CIMTAdminAPI.FirewallUnsubscribe( CIMTConFirewallSink sink // CIMTConFirewallSink object )  
---  
Python
AdminAPI.FirewallUnsubscribe( sink # IMTConFirewallSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFirewallSink](imtconfirewallsink.md "IMTConFirewallSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTAdminAPI::FirewallSubscribe](imtadminapi_firewallsubscribe.md "FirewallSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.