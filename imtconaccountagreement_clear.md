# Clear (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Common ](config_common.md "Common") / [ IMTConAccountAgreement ](imtconaccountagreement.md "IMTConAccountAgreement")/ Clear | [](imtconaccountagreement_assign.md "Assign") [](imtconaccountagreement_captiontype.md "CaptionType") |
| --- | --- | --- |
| --- | --- |

IMTConAccountAgreement::Clear
Clear an object.
C++
MTAPIRES IMTConAccountAgreement::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAccountAgreement.Clear()  
---  
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates success. Otherwise, an error has occurred, which corresponds to the response code.
Note
The method clears all field values and removes all nested objects.