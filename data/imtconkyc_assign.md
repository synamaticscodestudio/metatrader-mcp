# Assign (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ KYC ](config_kyc.md "KYC") / [ IMTConKYC ](imtconkyc.md "IMTConKYC")/ Assign | [](imtconkyc_release.md "Release") [](imtconkyc_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTConKYC::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTConKYC::Assign( const IMTConKYC* config // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConMessenger.Assign( CIMTConKYC config // Source object )  
---  
Parameters
config
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.