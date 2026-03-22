# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups") / [ IMTConCommission ](imtconcommission.md "IMTConCommission")/ Assign | [](imtconcommission_release.md "Release") [](imtconcommission_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConCommission::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConCommission::Assign( const IMTConCommission* group // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConCommission.Assign( CIMTConCommission group // Source object )  
---  
Parameters
group
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.