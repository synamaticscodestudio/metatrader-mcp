# FirewallSubscribe (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Firewall ](serverapi_config_firewall.md "Firewall")/ FirewallSubscribe | [](imtserverapi_firewallcreate.md "FirewallCreate") [](imtserverapi_firewallunsubscribe.md "FirewallUnsubscribe") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::FirewallSubscribe
Subscribe to events and hooks associated with the firewall configuration.
MTAPIRES IMTServerAPI::FirewallSubscribe( IMTConFirewallSink* sink // A pointer to the IMTConFirewallSink object )  
---  
Parameters
sink
[in] A pointer to the object that implements the [IMTConFirewallSink](imtconfirewallsink.md "IMTConFirewallSink") interface.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Subscribing to events is thread safe. One and the same interface [IMTConFirewallSink](imtconfirewallsink.md "IMTConFirewallSink") cannot subscribe to an event twice - in this case the response code [MT_RET_ERR_DUPLICATE](retcodes_common.md "Common errors") is returned.
The object at which sink points, must remain in the memory (must not be removed) until the call of [IMTServerAPI::FirewallUnsubscribe](imtserverapi_firewallunsubscribe.md "FirewallUnsubscribe") or until the plugin is deleted.