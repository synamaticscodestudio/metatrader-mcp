# EmailShift (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Configuration Databases ](serverapi_configuration.md "Configuration databases") / [ Mail Servers ](serverapi_config_email.md "Mail Servers")/ EmailShift | [](imtserverapi_emaildelete.md "EmailDelete") [](imtserverapi_emailtotal.md "EmailTotal") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::EmailShift
Change the position of a mail server configuration in the list.
MTAPIRES IMTServerAPI::EmailShift( const UINT pos, // Configuration position const int shift // Shift )  
---  
Parameters
pos
[in] Position of the configuration, starting with 0.
shift
[in] The shift of the configuration relative to its current position. A negative value means shift towards the top of the list, a positive value shifts towards the end.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
The position of a configuration can only be changed from the plugins which run on the main server. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned.