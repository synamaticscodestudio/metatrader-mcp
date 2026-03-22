# ValidTo (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ ValidTo | [](imtcertificate_validfrom.md "ValidFrom") [](imtcertificate_namecommon.md "NameCommon") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::ValidTo
Gets date until which the loaded certificate is valid.
C++
INT64 IMTCertificate::ValidTo() const  
---  
.NET (Gateway/Manager API)
long CIMTCertificate.ValidTo()  
---  
Return Value
The date until which the loaded certificate is valid. The date is passed as a number of seconds that have elapsed since 01.01.1970.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.