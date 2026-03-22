# Assign (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ Assign | [](imtcertificate_release.md "Release") [](imtcertificate_clear.md "Clear") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::Assign
Assign a passed object to the current one.
C++
MTAPIRES IMTCertificate::Assign( const IMTCertificate* certificate // Source object )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.Assign( CIMTCertificate certificate // Source object )  
---  
Parameters
certificate
[in] Source object.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.