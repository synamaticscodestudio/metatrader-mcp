# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAgreement ](imtconaccountagreement.md "IMTConAccountAgreement")/ Assign | [](imtconaccountagreement_release.md "Release") [](imtconaccountagreement_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAgreement::Assign
Assign the passed object to the current one.
C++
MTAPIRES IMTConAccountAgreement::Assign( const IMTConAccountAgreement* param // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAgreement.Assign( CIMTConAccountAgreement obj // Source object )  
---  
Parameters
param
[in] Source object.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.