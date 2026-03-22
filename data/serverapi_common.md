# Common Functions (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface")/ Common Functions | [](imtserverapi.md "Main API Interface") [](imtserverapi_allocate.md "Allocate") |
| --- | --- | --- |
| --- | --- |

Common Functions
The common functions of the MetaTrader 5 Server API include general purpose functions that do not manage any of the platform configurations or information on the server, but are required for writing a plugin.
Memory Management
The MetaTrader 5 Server API allows managing the memory used by plugins. Recommendations for memory management are given in the [appropriate section](serverapi_best_practice.htm#memory_manage).
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Allocate](imtserverapi_allocate.md "Allocate") | Memory allocation by a server plugin. |
| [Free](imtserverapi_free.md "Free") | Free memory allocated previously using the Allocate method. |

Journal
The MetaTrader 5 Server API provides access to server logs. The API includes functions for working with the logs. Currently only the functions for message logging and saving them to a hard disk are supported. Further new functions for log analyzing will be added.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LoggerOut](imtserverapi_loggerout.md "LoggerOut") | Logging messages. |
| [LoggerOutString](imtserverapi_loggeroutstring.md "LoggerOutString") | Output unformatted stings to the server journal (quick output). |
| [LoggerRequest](imtserverapi_loggerrequest.md "LoggerRequest") | Request the server logs. |
| [LoggerFlush](imtserverapi_loggerflush.md "LoggerFlush") | Flush the file buffer of the journal to a disk. |

Service Functions
The following additional functions are available in the MetaTrader 5 Server API:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [About](imtserverapi_about.md "About") | Quickly receive the description of the server on which the plugin is running. |
| [LicenseCheck](imtserverapi_licensecheck.md "LicenseCheck") | Check the plugin license. |