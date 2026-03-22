# NameCommon (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ NameCommon | [](imtcertificate_validto.md "ValidTo") [](imtcertificate_nameissuer.md "NameIssuer") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::NameCommon
Gets the common name of the loaded certificate.
C++
MTAPIRES IMTCertificate::NameCommon( MTAPISTR& name // Common name ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.NameCommon( out string name // Common name )  
---  
Parameters
name
[out] A reference to the common name (CN) of the certificate.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.