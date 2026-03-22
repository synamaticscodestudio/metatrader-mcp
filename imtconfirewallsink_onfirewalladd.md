# OnFirewallAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewallSink ](imtconfirewallsink.md "IMTConFirewallSink")/ OnFirewallAdd | [](imtconfirewallsink.md "IMTConFirewallSink") [](imtconfirewallsink_onfirewallupdate.md "OnFirewallUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConFirewallSink::OnFirewallAdd
A handler of the event of adding a new firewall rule.
C++
virtual void IMTConFirewallSink::OnFirewallAdd( const IMTConFirewall* config // A pointer to the rule object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFirewallSink.OnFirewallAdd( CIMTConFirewall config // An object of the rule )  
---  
Parameters
config
[in] A pointer to the object of the added rule.
Note
This method is called by the API to notify that a new firewall rule has been added.