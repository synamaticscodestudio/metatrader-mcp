# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAllocation ](imtconaccountallocation.md "IMTConAccountAllocation")/ Assign | [](imtconaccountallocation_release.md "Release") [](imtconaccountallocation_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAllocation::Assign
Assign the passed object to the current one.
C++
MTAPIRES IMTConAccountAllocation::Assign( const IMTConAccountAllocation* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAgreement.Assign( CIMTConAccountAllocation obj // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.