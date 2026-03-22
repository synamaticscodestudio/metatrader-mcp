# Comment (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewall ](imtconfirewall.md "IMTConFirewall")/ Comment | [](imtconfirewall_to.md "To") [](imtconfirewallsink.md "IMTConFirewallSink") |
| --- | --- | --- |
| --- | --- |

IMTConFirewall::Comment
Get a comment to the firewall rule.
C++
LPCWSTR IMTConFirewall::Comment() const  
---  
.NET (Gateway/Manager API)
string CIMTConFirewall.Comment()  
---  
Python (Manager API)
MTConFirewall.Comment  
---  
Return Value
If successful, it returns a pointer to a string with a comment to the rule. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFirewall](imtconfirewall.md "IMTConFirewall") object.
To use the string after the object removal (call of the [IMTConFirewall::Release](imtconfirewall_release.md "Release") method of this object), a copy of it should be created.
IMTConFirewall::Comment
Set a comment to the firewall rule.
C++
MTAPIRES IMTConFirewall::Comment( LPCWSTR comment // Comment )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFirewall.Comment( srting comment // Comment )  
---  
Python (Manager API)
MTConFirewall.Comment  
---  
Parameters
comment
[in] A comment to the firewall rule.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The maximum comment length is 32 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.