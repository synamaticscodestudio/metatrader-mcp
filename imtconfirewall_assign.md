# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewall ](imtconfirewall.md "IMTConFirewall")/ Assign | [](imtconfirewall_release.md "Release") [](imtconfirewall_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConFirewall::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConFirewall::Assign( const IMTConFirewall* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFirewall.Assign( CIMTConFirewall param // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.