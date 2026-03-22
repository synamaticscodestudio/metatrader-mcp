# Save (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ Save | [](imtcertificate_openmemory.md "OpenMemory") [](imtcertificate_close.md "Close") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::Save
Saves the certificate to a file.
C++
MTAPIRES IMTCertificate::Save( LPCWSTR filename // Path to the file ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.Save( string filename // Path to the file )  
---  
Parameters
filename
[in] The path to the file, to which the certificate should be saved.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.