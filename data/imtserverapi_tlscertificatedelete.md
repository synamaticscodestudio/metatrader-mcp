# TLSCertificateDelete (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ TLSCertificateDelete | [](imtserverapi_tlscertificateupdate.md "TLSCertificateUpdate") [](imtserverapi_tlscertificateshift.md "TLSCertificateShift") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TLSCertificateDelete
Delete an SSL certificate from access servers by position.
MTAPIRES IMTServerAPI::TLSCertificateDelete( const UINT pos // Certificate position )  
---  
Parameters
pos
[in] Certificate position starting with 0.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
Certificates can only be deleted from plugins running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.