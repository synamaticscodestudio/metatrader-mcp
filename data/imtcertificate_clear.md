# Clear (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ Clear | [](imtcertificate_assign.md "Assign") [](imtcertificate_open.md "Open") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::Clear
Clear an object.
C++
MTAPIRES IMTCertificate::Clear()  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.Clear()  
---  
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method clears all fields ​​and removes embedded objects.