# OpenMemory (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Certificates ](reference_certificate.md "Certificates") / [ IMTCertificate ](imtcertificate.md "IMTCertificate")/ OpenMemory | [](imtcertificate_open.md "Open") [](imtcertificate_save.md "Save") |
| --- | --- | --- |
| --- | --- |

IMTCertificate::OpenMemory
Loads certificate description from the memory.
C++
MTAPIRES IMTCertificate::OpenMemory( const void *data, // A pointer to memory const UINT size // Data size )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTCertificate.OpenMemory( byte[] data // Data array )  
---  
Parameters
*data
[in] A pointer to memory, from which the certificate description should be loaded.
size
[in] Amount of loaded data in bytes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.