# CaptionType (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAgreement ](imtconaccountagreement.md "IMTConAccountAgreement")/ CaptionType | [](imtconaccountagreement_clear.md "Clear") [](imtconaccountagreement_captioncustomtext.md "CaptionCustomText") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAgreement::CaptionType
Get the agreement type.
C++
UINT IMTConAccountAgreement::Type() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAccountAgreement.Type()  
---  
Return Value
One of the values of the [IMTConAccountAgreement::EnCaptionType](imtconaccountagreement_enum.htm#encaptiontype) values.
IMTConAccountAgreement::CaptionType
Set the agreement type.
C++
MTAPIRES IMTConAccountAgreement::Type( const UINT type // Agreement type )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAgreement.Type( uint type // Agreement type )  
---  
Parameters
type
[in] The agreement type is passed using the [IMTConAccountAgreement::EnCaptionType](imtconaccountagreement_enum.htm#encaptiontype) enumeration.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.