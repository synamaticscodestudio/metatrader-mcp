# TLSCertificateTotal (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Network ](serverapi_config_network.md "Network")/ TLSCertificateTotal | [](imtserverapi_tlscertificateshift.md "TLSCertificateShift") [](imtserverapi_tlscertificatenext.md "TLSCertificateNext") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TLSCertificateTotal
The total number of certificates installed for access servers.
UINT IMTServerAPI::TLSCertificateTotal()  
---  
Return Value
The number of installed certificates.
Note
Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.