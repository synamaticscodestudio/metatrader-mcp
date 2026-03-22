# TLSCertificateNext (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ TLSCertificateNext | [](imtadminapi_tlscertificatetotal.md "TLSCertificateTotal") [](imtadminapi_config_plugin.md "Functions") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TLSCertificateNext
Get the data of a certificate installed for access servers, by index.
C++
MTAPIRES IMTAdminAPI::TLSCertificateNext( const UINT pos, // Certificate position MTAPISTR& name, // Name MTAPISTR& thumbprint // Thumbprint )  
---  
.NET
MTRetCode CIMTAdminAPI::TLSCertificateNext( uint pos, // Certificate position 0 out string name, // Name out string thumbprint // Thumbprint )  
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