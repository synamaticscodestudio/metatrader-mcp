# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommTier ](imtconcommtier.md "IMTConCommTier")/ Assign | [](imtconcommtier_release.md "Release") [](imtconcommtier_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConCommTier::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConCommTier::Assign( const IMTConCommTier* group // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommTier.Assign( CIMTConCommTier group // Source object )  
---  
Parameters
group
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.