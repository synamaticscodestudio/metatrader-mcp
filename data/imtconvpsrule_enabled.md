# Enabled (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ VPS ](config_vps.md "VPS") / [ IMTConVPSRule ](imtconvpsrule.md "IMTConVPSRule")/ Enabled | [](imtconvpsrule_clear.md "Clear") [](imtconvpsrule_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConVPSRule::Enabled
Get the state of the VPS allocation rule.
C++
bool IMTConVPSRule::Enabled() const  
---  
.NET (Gateway/Manager API)
bool CIMTConVPSRule.Enabled()  
---  
Python
MTConVPSRule.Enabled  
---  
Return Value
If the rule is enabled, the method returns TRUE; otherwise, it returns FALSE.
IMTConVPSRule::Enabled
Set the state of the VPS allocation rule.
C++
MTAPIRES IMTConVPSRule::Enabled( const bool enabled // Rule state )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConVPSRule.Mode( bool enabled // Rule state )  
---  
Python
MTConVPSRule.Enabled  
---  
Parameters
enabled
[in] Hosting allocation rule state: TRUE — enabled, FALSE — disabled.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.