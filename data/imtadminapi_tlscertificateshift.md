# TLSCertificateShift (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ TLSCertificateShift | [](imtadminapi_tlscertificatedelete.md "TLSCertificateDelete") [](imtadminapi_tlscertificatetotal.md "TLSCertificateTotal") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TLSCertificateShift
Change the position of an SSL certificate in the list.
C++
MTAPIRES IMTAdminAPI::TLSCertificateShift( const UINT pos, // Certificate position const int shift // Shift )  
---  
.NET
MTRetCode CIMTAdminAPI::TLSCertificateShift( uint pos, // Certificate position int shift // Shift )  
---  
Parameters
pos
[in] Certificate position starting with 0.
shift
[in] Shift of the certificate relative to the current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The certificate position can only be changed from the applications running on the main server. For all other plugins, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.