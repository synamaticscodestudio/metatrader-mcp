# NameOrganization (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ NameOrganization | [](imtcertificate_nameissuer.md "NameIssuer") [](imtcertificate_nameorganizationunit.md "NameOrganizationUnit") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::NameOrganization
Gets the name of the organization (O), to which the loaded certificate has been issued.
C++
MTAPIRES IMTCertificate::NameOrganization( MTAPISTR& name // The name of the organization ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.NameOrganization( out string name // The name of the organization )  
---  
Parameters
name
[out] A reference to the name of the organization (O), to which the certificate has been issued.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.