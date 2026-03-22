# Common Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface")/ Common Functions | [](imtmanagerapi.md "Manager Interface") [](imtmanagerapi_allocate.md "Allocate") |
| --- | --- | --- |
| --- | --- |

Common Functions
The common functions of the [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface include general purpose functions that do not control any of the platform configurations or information on the server, but are required for developing applications. 
Memory Management
The MetaTrader 5 Manager API allows managing the memory used by applications.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Allocate](imtmanagerapi_allocate.md "Allocate") | Memory allocation by an application. |
| [Free](imtmanagerapi_free.md "Free") | Free memory allocated previously using the Allocate method. |

Journal
The MetaTrader 5 Manager API provides access to server logs. The API includes functions for working with the logs. The [IMTManagerAPI](imtmanagerapi.md "Manager Interface") interface allows to output messages in the log, as well as to request server logs.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LoggerOut](imtmanagerapi_loggerout.md "LoggerOut") | Log messages. |
| [LoggerOutString](imtmanagerapi_loggeroutstring.md "LoggerOutString") | Fast output method which prints unformatted logs to the Manager API local journal. |
| [LoggerFlush](imtmanagerapi_loggerflush.md "LoggerFlush") | Flush the file buffer of the server journal to a disk. |
| [LoggerServerRequest](imtmanagerapi_loggerserverrequest.md "LoggerServerRequest") | Request the server logs. |

The MetaTrader 5 Manager API contains a number of constants for working with logs. They are described in a [separate section](journal.md "Journal Constants").
Service Functions
The following additional functions are available in the MetaTrader 5 Manager API:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtmanagerapi_release.md "Release") | Delete the IMTManagerAPI object. |
| [LicenseCheck](imtmanagerapi_licensecheck.md "LicenseCheck") | Check the application license. |
| [PasswordChange](imtmanagerapi_passwordchange.md "PasswordChange") | Change password of an account that is used to connect the application to the server. |