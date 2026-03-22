# NameGiven (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ NameGiven | [](imtcertificate_nameorganizationunit.md "NameOrganizationUnit") [](reference_ticks.md "Price Data") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::NameGiven
Gets the name of the person (G), to whom the loaded certificate has been issued.
C++
MTAPIRES IMTCertificate::NameGiven( MTAPISTR& name // person name ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.NameGiven( out string name // person name )  
---  
Parameters
name
[out] A reference to the name of the person (G), to whom the loaded certificate has been issued.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.