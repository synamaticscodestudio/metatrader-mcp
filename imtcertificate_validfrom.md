# ValidFrom (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ ValidFrom | [](imtcertificate_serialnumber.md "SerialNumber") [](imtcertificate_validto.md "ValidTo") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::ValidFrom
Gets date since which the loaded certificate is valid.
C++
INT64 IMTCertificate::ValidFrom() const  
---  
.NET (Gateway/Manager API)
long CIMTCertificate.ValidFrom()  
---  
Return Value
The date since which the loaded certificate is valid. The date is passed as a number of seconds that have elapsed since 01.01.1970.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.