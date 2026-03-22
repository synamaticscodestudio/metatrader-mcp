# SerialNumber (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ SerialNumber | [](imtcertificate_isequal.md "IsEqual") [](imtcertificate_validfrom.md "ValidFrom") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::SerialNumber
Gets the serial number of the loaded certificate.
C++
UINT64 IMTCertificate::SerialNumber() const  
---  
.NET (Gateway/Manager API)
ulong CIMTCertificate.SerialNumber()  
---  
Return Value
The serial number of the loaded certificate.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.