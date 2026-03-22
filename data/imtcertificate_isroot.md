# IsRoot (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ IsRoot | [](imtcertificate_isopened.md "IsOpened") [](imtcertificate_isca.md "IsCA") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::IsRoot
Checks if the loaded certificate is the root one.
C++
bool IMTCertificate::IsRoot() const  
---  
.NET (Gateway/Manager API)
bool CIMTCertificate.IsRoot()  
---  
Return Value
The value of 0 means that the certificate is not a root one, 1 - this is a root certificate.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.