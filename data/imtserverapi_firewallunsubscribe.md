# FirewallUnsubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Firewall ](serverapi_config_firewall.md "Firewall")/ FirewallUnsubscribe | [](imtserverapi_firewallsubscribe.md "FirewallSubscribe") [](imtserverapi_firewalladd.md "FirewallAdd") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FirewallUnsubscribe
Unsubscribe from events and hooks associated with the firewall configuration.
MTAPIRES IMTServerAPI::FirewallUnsubscribe( IMTConFirewallSink* sink // A pointer to the IMTConFirewallSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFirewallSink](imtconfirewallsink.md "IMTConFirewallSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
This is a pair method to [IMTServerAPI::FirewallSubscribe](imtserverapi_firewallsubscribe.md "FirewallSubscribe"). If an attempt is made to unsubscribe from the interface to which it has not subscribed, [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") error is returned.