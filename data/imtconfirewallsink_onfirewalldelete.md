# OnFirewallDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewallSink ](imtconfirewallsink.md "IMTConFirewallSink")/ OnFirewallDelete | [](imtconfirewallsink_onfirewallupdate.md "OnFirewallUpdate") [](imtconfirewallsink_onfirewallsync.md "OnFirewallSync") |
| --- | --- | --- |
| --- | --- |

IMTConFirewallSink::OnFirewallDelete
A handler of the event of deletion of a firewall rule.
C++
virtual void IMTConFirewallSink::OnFirewallDelete( const IMTConFirewall* config // A pointer to the rule object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFirewallSink.OnFirewallDelete( CIMTConFirewall config // An object of the rule )  
---  
Parameters
config
[in] A pointer to the object of the deleted rule.
Note
This method is called by the API to notify that firewall rule has been deleted.