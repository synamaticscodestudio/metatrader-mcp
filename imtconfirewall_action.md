# Action (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewall ](imtconfirewall.md "IMTConFirewall")/ Action | [](imtconfirewall_clear.md "Clear") [](imtconfirewall_from.md "From") |
| --- | --- | --- |
| --- | --- |

IMTConFirewall::Action
Get the type of actions undertaken in accordance with the firewall rule.
C++
UINT IMTConFirewall::Action() const  
---  
.NET (Gateway/Manager API)
EnAction CIMTConFirewall.Action()  
---  
Python (Manager API)
MTConFirewall.Action  
---  
Return Value
One of the value of the [IMTConFirewall::EnAction](imtconfirewall_enum.htm#enaction) enumeration.
IMTConFirewall::Action
Sets the type of actions performed in accordance with the firewall rule.
C++
MTAPIRES IMTConFirewall::Action( const UINT action // Type of action )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFirewall.Action( EnAction action // Type of action )  
---  
Python (Manager API)
MTConFirewall.Action  
---  
Parameters
action
[in] The type of action. The [IMTConFirewall::EnAction](imtconfirewall_enum.htm#enaction) enumeration is used to pass the action type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.