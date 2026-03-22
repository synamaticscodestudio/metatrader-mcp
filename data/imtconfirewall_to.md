# To (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Firewall ](config_firewall.md "Firewall") / [ IMTConFirewall ](imtconfirewall.md "IMTConFirewall")/ To | [](imtconfirewall_from.md "From") [](imtconfirewall_comment.md "Comment") |
| --- | --- | --- |
| --- | --- |

IMTConFirewall::To
Get the end of the range of IP addresses to which the firewall rule is applied.
C++
LPCWSTR IMTConFirewall::To() const  
---  
.NET (Gateway/Manager API)
string CIMTConFirewall.To()  
---  
Python (Manager API)
MTConFirewall.To  
---  
Return Value
If successful, returns a pointer to a string with the last IP address of the range. Otherwise, it returns NULL.
Note
The pointer to the resulting string is valid for the lifetime of the [IMTConFirewall](imtconfirewall.md "IMTConFirewall") object.
To use the string after the object removal (call of the [IMTConFirewall::Release](imtconfirewall_release.md "Release") method of this object), a copy of it should be created.
IMTConFirewall::To
Set the end of the range of IP addresses to which the firewall rule is applied.
C++
MTAPIRES IMTConFirewall::To( LPCWSTR value // End of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConFirewall.To( string value // End of the range )  
---  
Python (Manager API)
MTConFirewall.To  
---  
Parameters
value
[in] The last IP address of the range to which the firewall rule is applied.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The length of the address is limited to 64 characters (including the end-of-line character). If a string of a greater length is assigned, it will be cut to this length.