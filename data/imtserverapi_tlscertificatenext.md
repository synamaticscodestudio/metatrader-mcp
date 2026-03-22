# TLSCertificateNext (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ TLSCertificateNext | [](imtserverapi_tlscertificatetotal.md "TLSCertificateTotal") [](imtserverapi_tlscertificatepfx.md "TLSCertificatePfx") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TLSCertificateNext
Get the data of a certificate installed for access servers, by index.
MTAPIRES IMTServerAPI::TLSCertificateNext( const UINT pos, // Certificate position MTAPISTR& name, // Name MTAPISTR& thumbprint // Thumbprint )  
---  
pos
[in] Certificate position starting with 0.
name
[out] certificate name. Here the "Common Name" certificate field is passed. In this field, the domain for which the certificate is issued, is indicated.
thumbprint
[out] Certificate thumbprint — the "Thumbprint" field.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.