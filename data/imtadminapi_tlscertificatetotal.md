# TLSCertificateTotal (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Configuration Databases ](imtadminapi_config.md "Configuration Functions") / [ Network ](imtadminapi_config_network.md "Functions")/ TLSCertificateTotal | [](imtadminapi_tlscertificateshift.md "TLSCertificateShift") [](imtadminapi_tlscertificatenext.md "TLSCertificateNext") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::TLSCertificateTotal
The total number of certificates installed for access servers.
C++
UINT IMTAdminAPI::TLSCertificateTotal()  
---  
.NET
uint CIMTAdminAPI::TLSCertificateTotal()  
---  
Return Value
The number of installed certificates.
Note
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.