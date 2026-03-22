# Close (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ Close | [](imtcertificate_save.md "Save") [](imtcertificate_raw.md "Raw") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::Close
Closes (unloads) a certificate that was earlier opened by [IMTCertificate::Open](imtcertificate_open.md "Open") or [IMTCertificate::OpenMemory](imtcertificate_openmemory.md "OpenMemory") method.
C++
MTAPIRES IMTCertificate::Close()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.Close()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.