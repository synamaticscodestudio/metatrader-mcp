# Common Functions (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface")/ Common Functions | [](imtgatewayapi_enum.md "Enumerations") [](imtgatewayapi_allocate.md "Allocate") |
| --- | --- | --- |
| --- | --- |

Common Functions
The common functions of the MetaTrader 5 Gateway API include general purpose functions that do not manage any of the settings or data but are required for writing a gateway.
Memory Management
The MetaTrader 5 Gateway API allows managing the memory used by applications.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Allocate](imtgatewayapi_allocate.md "Allocate") | Memory allocation by an application. |
| [Free](imtgatewayapi_free.md "Free") | Free memory allocated previously using the Allocate method. |

Journal
MetaTrader 5 Report API provides access to server logs allowing to output records in them and save that records on the hard drive.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LoggerOut](imtgatewayapi_loggerout.md "LoggerOut") | Log messages. |
| [LoggerOutString](imtgatewayapi_loggeroutstring.md "LoggerOutString") | Quick output of unformatted stings to the journal. |
| [LoggerFlush](imtgatewayapi_loggerflush.md "LoggerFlush") | Flush the file buffer of the journal to a disk. |

Service Functions
The following additional functions are available in the MetaTrader 5 Gateway API:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtgatewayapi_release.md "Release") | Delete an object. |
| [LicenseCheck](imtgatewayapi_licensecheck.md "LicenseCheck") | A function for checking the gateway/data feed usage license. |