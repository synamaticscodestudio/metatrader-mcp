# TLSCertificatePfx (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ TLSCertificatePfx | [](imtserverapi_tlscertificatenext.md "TLSCertificateNext") [](serverapi_config_plugins.md "Plugins") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TLSCertificatePfx
Get the file of a certificate installed for access servers, by index.
void* IMTServerAPI::TLSCertificatePfx( const UINT pos, // Certificate position UINT& pfx_certificate_size // Name )  
---  
pos
[in] Certificate position starting with 0.
pfx_certificate_size
[out] Certificate file size.
Return Value
A pointer to a .pfx certificate file. After use, the memory allocated for the certificate must be freed by [IMTServerAPI::Free](imtserverapi_free.md "Free").
Note
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.