# Add Certificate (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Network ](webapi_network.md "Network")/ Add Certificate | [](webapi_server_restart.md "Restart Server") [](webapi_tls_certificate_delete.md "Delete Certificate") |
| --- | --- | --- |
| --- | --- |

Add Certificate
The request allows adding and updating SSL certificates on access servers.
Request Format
POST /api/tls_certificate/add {  "password": "password", "cert": "certificate" }  
---  
Response Format
{ "retcode" : "code description" }  
---  
Example
//--- request to the server POST /api/tls_certificate/add {  "password": "secret_passrod", "cert": "MIISFQIBAzCCEEAQAAADA3MB8wBwYFKw4 ... EOH4gtNlQXeMX/LmfpBcbW5VOJ6BBRgKp+aktx2dQjo1MDRKCfBe67yJQ==" } //--- server response { "retcode" : "0 Done" }  
---  
Request Parameters
The request has no parameters. The description of the certificate being created/updated is passed in JSON format as an additional body.
  * In the required 'cert' field, the certificate binary body is passed in the format of Base64 — certificate with the private key in PFX format. If the file contains multiple certificates (for example a chain), only the first of them will be installed.
  * The certificate can password protected. In this case, pass it in the 'password' parameter. Otherwise the certificate will not be installed and the request will return the [1005](retcodes_authentication.md "Authentication") error. The parameter is optional. This password is only used for certificate installation on the local computer and is not transmitted anywhere.

Response Parameters
  * retcode — if successful, the command returns [the response code](retcodes_successful.md "Successful completion") 0\. Otherwise, an error code is returned.

Disclaimer
  * The request only works when connected to the main trade server. Otherwise error [12001](retcodes_api.md "API") is returned.
  * During request execution, the existence of the certificate to be added is checked. If it exists, the certificate is updated. Otherwise a new certificate is installed. The check is based on the ["Thumbprint"](webapi_server_data_format.htm#certificate) certificate field.
  * To run the request, [the Manager account](webapi_rest_authentication.htm#client_start) must have permissions to connect as an administrator and to edit network configurations. Otherwise, the error code [8](retcodes_common.md "Common errors") is returned.
  * The certificate is installed for all access servers within the cluster.
  * Certificates are required for connection to access servers using the HTTPS protocol. This enables sending of [Web API](webapi.md "Web API") commands to a server as ordinary GET and POST requests. For details please visit the "[Requests via HTTPS](webapi_https.md "Format of Commands")" section.
