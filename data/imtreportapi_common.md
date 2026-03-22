# Common Functions (MetaTrader5SDK)

|  | [ Report API ](reportapi.md "Report API") / [ Main Interface of Reports ](imtreportapi.md "Main Report Interface")/ Common Functions | [](imtreportapi_enum.md "Enumerations") [](imtreportapi_allocate.md "Allocate") |
| --- | --- | --- |
| --- | --- |

Common Functions
The common functions of the MetaTrader 5 Report API include general purpose functions that do not manage any of the platform configurations or information on the server, but are required for writing a plugin.
Memory Management
MetaTrader 5 Report API allows managing the memory used by modules.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Allocate](imtreportapi_allocate.md "Allocate") | Memory allocation by areports module. |
| [Free](imtreportapi_free.md "Free") | Free memory allocated previously using the Allocate method. |

Journal
MetaTrader 5 Report API provides access to server logs allowing to output records in them and save that records on the hard drive.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LoggerOut](imtreportapi_loggerout.md "LoggerOut") | Log messages. |
| [LoggerOutString](imtreportapi_loggeroutstring.md "LoggerOutString") | Quick output of unformatted stings to the journal. |
| [LoggerFlush](imtreportapi_loggerflush.md "LoggerFlush") | Flush the file buffer of the journal to a disk. |
| [LoggerRequest](imtreportapi_loggerrequest.md "LoggerRequest") | Request the journal of the trade server where the module is running. |

Service Functions
The following additional functions are available in the MetaTrader 5 Report API:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [About](imtreportapi_about.md "About") | Quickly receive the description of the server on which the module is running. |
| [LicenseCheck](imtreportapi_licensecheck.md "LicenseCheck") | Check the module license. |
| [Clear](imtreportapi_clear.md "Clear") | Clear the object. |
| [IsStopeed](imtreportapi_isstopped.md "IsStopeed") | Check the presence of the request to stop a report generation. |