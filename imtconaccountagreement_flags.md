# Flags (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAgreement ](imtconaccountagreement.md "IMTConAccountAgreement")/ Flags | [](imtconaccountagreement_url.md "URL") [](imtconcommonsink.md "IMTConCommonSink") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAgreement::Flags
Get additional agreement settings.
C++
UINT IMTConAccountAgreement::Flags() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAccountAgreement.Flags()  
---  
Return Value
[IMTConAccountAgreement::EnFlags](imtconaccountagreement_enum.htm#enflags) enumeration value.
IMTConAccountAgreement::Flags
Set additional agreement settings.
C++
MTAPIRES IMTConAccountAgreement::Flags( const UINT flags // Agreement settings )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAgreement.Flags( uint flags // Agreement settings )  
---  
Parameters
flags
[in] Agreement settings are passed using the [IMTConAccountAgreement::EnFlags](imtconaccountagreement_enum.htm#enflags) enumeration.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.