# IsCA (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ IsCA | [](imtcertificate_isroot.md "IsRoot") [](imtcertificate_isequal.md "IsEqual") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::IsCA
Checks the loaded certificate - if it is possible to generate other certificates on its basis.
C++
bool IMTCertificate::IsCA() const  
---  
.NET (Gateway/Manager API)
bool CIMTCertificate.IsCA()  
---  
Return Value
A value of 0 means that the generation of other certificates is not possible, 1 - the certificate allows generating other certificates on its basis.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.