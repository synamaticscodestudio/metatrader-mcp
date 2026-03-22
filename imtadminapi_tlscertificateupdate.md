# TLSCertificateUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ TLSCertificateUpdate | [](imtadminapi_netserverget.md "NetServerGet") [](imtadminapi_tlscertificatedelete.md "TLSCertificateDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TLSCertificateUpdate
Add or update an SSL certificate on access servers.
C++
MTAPIRES IMTAdminAPI::TLSCertificateUpdate( const void* pfx_certificate, // Certificate const UINT pfx_certificate_size, // Certificate size LPCWSTR password // Certificate password )  
---  
.NET
MTRetCode CIMTAdminAPI::TLSCertificateUpdate( byte[] pfx_certificate, // Certificate string password // Certificate password )  
---  
Parameters
pfx_certificate
[in] A pointer to a file containing a certificate with a private key. If the file contains multiple certificates (for example a chain), only the first of them will be installed.
pfx_certificate_size
[in] Certificate size in bytes.
password
[in] The certificate cane be protected by a password. In this case, pass it in the 'password' parameter. Otherwise the certificate will not be installed and the method will return the [MT_RET_AUTH_CERTIFICATE_BAD](retcodes_authentication.md "Authentication") error.
  * The parameter is optional.
  * This password is only used for certificate installation on the local computer and is not transmitted anywhere.

Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
When you call the method, the existence of the certificate to be added is checked. If it exists, the certificate is updated. Otherwise a new certificate is installed. The check is based on the "Thumbprint" certificate field.
A certificate can only be added or updated from the applications that run on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
The certificate is installed for all access servers within the cluster.
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.