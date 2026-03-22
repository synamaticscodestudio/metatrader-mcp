# Open (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ Open | [](imtcertificate_clear.md "Clear") [](imtcertificate_openmemory.md "OpenMemory") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::Open
Loads certificate description from a specified file.
C++
MTAPIRES IMTCertificate::Open( LPCWSTR filename // Path to the file )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.Open( string filename // Path to the file )  
---  
Parameters
filename
[in] The path to the file, from which the certificate should be loaded.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
Certificate description is loaded in th binary format DER.