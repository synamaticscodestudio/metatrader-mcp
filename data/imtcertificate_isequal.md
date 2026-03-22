# IsEqual (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ IsEqual | [](imtcertificate_isca.md "IsCA") [](imtcertificate_serialnumber.md "SerialNumber") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::IsEqual
Checks if the passed certificate is identical to the loaded one.
C++
bool IMTCertificate::IsEqual( const IMTCertificate* certificate // Certificate object )  
---  
.NET (Gateway/Manager API)
bool CIMTCertificate.IsEqual( CIMTCertificate certificate // Certificate object )  
---  
Parameters
certificate
[in] The object of the certificate that you want to compare to the loaded one.
Return Value
The value of 0 means that the certificate is not identical, 1 - the certificate is identical.
Note
Certificates ate opened (loaded) using the [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") methods.