# NameOrganizationUnit (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ NameOrganizationUnit | [](imtcertificate_nameorganization.md "NameOrganization") [](imtcertificate_namegiven.md "NameGiven") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::NameOrganizationUnit
Gets the name of the organization unit (OU), to which the loaded certificate has been issued.
C++
MTAPIRES IMTCertificate::NameOrganizationUnit( MTAPISTR& name // The name of the organizational unit ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.NameOrganizationUnit( out string name // The name of the organizational unit )  
---  
Parameters
name
[out] A reference to the name of the organization unit (OU), to which the certificate has been issued.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.