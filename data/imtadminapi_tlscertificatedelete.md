# TLSCertificateDelete (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ TLSCertificateDelete | [](imtadminapi_tlscertificateupdate.md "TLSCertificateUpdate") [](imtadminapi_tlscertificateshift.md "TLSCertificateShift") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TLSCertificateDelete
Delete an SSL certificate from access servers by position.
C++
MTAPIRES IMTAdminAPI::TLSCertificateDelete( const UINT pos // Certificate position )  
---  
.NET
MTRetCode CIMTAdminAPI::TLSCertificateDelete( uint pos // Certificate position )  
---  
Parameters
pos
[in] Certificate position starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Certificates can only be deleted from applications running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.