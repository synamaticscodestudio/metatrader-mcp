# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewall ](imtconfirewall.md "IMTConFirewall")/ Clear | [](imtconfirewall_assign.md "Assign") [](imtconfirewall_action.md "Action") |
| --- | --- | --- |
| --- | --- |

IMTConFirewall::Clear
Clear an object.
C++
MTAPIRES IMTConFirewall::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFirewall.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.