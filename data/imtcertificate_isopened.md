# IsOpened (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ IsOpened | [](imtcertificate_rawsize.md "RawSize") [](imtcertificate_isroot.md "IsRoot") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::IsOpened
Checks whether an object interface has an open certificate.
C++
bool IMTCertificate::IsOpened() const  
---  
.NET (Gateway/Manager API)
bool CIMTCertificate.IsOpened()  
---  
Return Value
0 means there is no open certificate, 1 0 there is an open certificate.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.