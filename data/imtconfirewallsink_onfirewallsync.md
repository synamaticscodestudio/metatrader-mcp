# OnFirewallSync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewallSink ](imtconfirewallsink.md "IMTConFirewallSink")/ OnFirewallSync | [](imtconfirewallsink_onfirewalldelete.md "OnFirewallDelete") [](config_symbol.md "Symbols") |
| --- | --- | --- |
| --- | --- |

IMTConFirewallSink::OnFirewallSync
A handler of the firewall rules synchronization event.
C++
virtual void IMTConFirewallSink::OnFirewallSync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConFirewallSink.OnFirewallSync()  
---  
Note
This method is called by the API to notify that firewall rules have been synchronized.
Firewall configuration synchronization is performed on Access, History, Trade and Backup servers during connection to the main server.