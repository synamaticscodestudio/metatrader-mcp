# OnFirewallUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewallSink ](imtconfirewallsink.md "IMTConFirewallSink")/ OnFirewallUpdate | [](imtconfirewallsink_onfirewalladd.md "OnFirewallAdd") [](imtconfirewallsink_onfirewalldelete.md "OnFirewallDelete") |
| --- | --- | --- |
| --- | --- |

IMTConFirewallSink::OnFirewallUpdate
A handler of the event of update of a firewall rule.
C++
virtual void IMTConFirewallSink::OnFirewallUpdate( const IMTConFirewall* config // A pointer to the rule object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFirewallSink.OnFirewallUpdate( CIMTConFirewall config // An object of the rule )  
---  
Parameters
config
[in] A pointer to the updated rule object.
Note
This method is called by the API to notify that firewall rule has been updated.