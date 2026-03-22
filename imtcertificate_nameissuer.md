# NameIssuer (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ NameIssuer | [](imtcertificate_namecommon.md "NameCommon") [](imtcertificate_nameorganization.md "NameOrganization") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::NameIssuer
Get the name of the issuer (vendor) of the loaded certificate.
C++
MTAPIRES IMTCertificate::NameIssuer( MTAPISTR& name // The name of the issuer ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.NameIssuer( out string name // The name of the issuer )  
---  
Parameters
name
[out] The name of the certificate issuer (provider).
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.