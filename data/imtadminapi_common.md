# Common Functions (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface")/ Common Functions | [](imtadminapi.md "Administrator Interface") [](imtadminapi_allocate.md "Allocate") |
| --- | --- | --- |
| --- | --- |

Common Functions
The common functions of the [IMTAdminAPI](imtadminapi.md "Administrator Interface") interface include general purpose functions that do not control any of the platform configurations or information on the server, but are required for developing applications.
Memory Management
The MetaTrader 5 Manager API allows managing the memory used by applications.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Allocate](imtadminapi_allocate.md "Allocate") | Memory allocation by an application. |
| [Free](imtadminapi_free.md "Free") | Free memory allocated previously using the Allocate method. |

Journal
The MetaTrader 5 Manager API provides access to server logs. The API includes functions for working with the logs. The [IMTAdminAPI](imtadminapi.md "Administrator Interface") interface allows to output messages in the log, as well as to request logs of the server, data feeds and gateways.
| Function | Purpose |
| --- | --- |
| --- | --- |
| [LoggerOut](imtadminapi_loggerout.md "LoggerOut") | Log messages. |
| [LoggerOutString](imtadminapi_loggeroutstring.md "LoggerOutString") | Fast output method which prints unformatted logs to the Administrator API local journal. |
| [LoggerFlush](imtadminapi_loggerflush.md "LoggerFlush") | Flush the file buffer of the server journal to a disk. |
| [LoggerServerRequest](imtadminapi_loggerserverrequest.md "LoggerServerRequest") | Request the server logs. |
| [LoggerGatewayRequest](imtadminapi_loggergatewayrequest.md "LoggerGatewayRequest") | Request the gateway logs. |
| [LoggerFeederRequest](imtadminapi_loggerfeederrequest.md "LoggerFeederRequest") | Request the logs of data feeds. |

The MetaTrader 5 Manager API contains a number of constants for working with logs. They are described in a [separate section](journal.md "Journal Constants").
Service Functions
The following additional functions are available in the MetaTrader 5 Manager API:
| Function | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtadminapi_release.md "Release") | Delete the IMTAdminAPI object. |
| [LicenseCheck](imtadminapi_licensecheck.md "LicenseCheck") | Check the application license. |
| [PasswordChange](imtadminapi_passwordchange.md "PasswordChange") | Change password of an account that is used to connect the application to the server. |