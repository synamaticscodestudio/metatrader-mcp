# Journal Constants (MetaTrader5SDK)

|  | Journal Constants | [](reference_types.md "Internal Data Types") [](reference_retcodes.md "Return Codes") |
| --- | --- | --- |
| --- | --- |

Journal Constants
The MetaTrader 5 API provides access to server logs. A number of the constants described in the MT5APILogger.h file are available for working with the logs. The constants are described in the following enumerations:
  * [EnMTLogCode](journal.htm#enmtlogcode) — types of log messages.
  * [EnMTLogRequestMode](journal.htm#enmtlogrequestmode) — types of events recorded in the log.
  * [EnMTLogType](journal.htm#enmtlogtype) — types of log requests.
  * [EnMTLogFlags](journal.htm#enmtlogflags) — flags of log entries.

Message Types
Types of log messages are listed in the EnMTLogCode enumeration:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| MTLogFolder | -1 | Folder. |
| MTLogOK | 0 | Information message. |
| MTLogWarn | 1 | Warning. |
| MTLogErr | 2 | Error message. |
| MTLogAtt | 3 | Critical error message. |
| MTLogLogin | 4 | System login message. |
| MTLogFirst |  | Beginning of enumeration. It corresponds to MTLogFolder. |
| MTLogLast |  | End of the enumeration. It corresponds to MTLogLogin. |

This enumeration is used in the following methods:
  * [IMTAdminAPI::LoggerOut](imtadminapi_loggerout.md "LoggerOut")
  * [IMTManagerAPI::LoggerOut](imtmanagerapi_loggerout.md "LoggerOut")
  * [IMTGatewayAPI::LoggerOut](imtgatewayapi_loggerout.md "LoggerOut")
  * [IMTSerserAPI::LoggerOut](imtserverapi_loggerout.md "LoggerOut")

Request Types
The types of request of the server journal are listed in the EnMTLogRequestMode enumeration:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| MTLogModeStd | 0 | A standard request mode. All messages except for user connection notifications are requested. |
| MTLogModeErr | 1 | In this mode, only error messages ([MTLogErr](journal.htm#enmtlogcode)) are requested. |
| MTLogModeFull | 2 | All types of log entries are requested when this mode is selected. |
| MTLogModeFirst |  | Beginning of enumeration. It corresponds to MTLogModeStd. |
| MTLogModeLast |  | End of enumeration. It corresponds to MTLogModeFull. |

This enumeration is used in the following methods:
  * [IMTAdminAPI::LoggerServerRequest](imtadminapi_loggerserverrequest.md "LoggerServerRequest")
  * [IMTManagerAPI::LoggerServerRequest](imtmanagerapi_loggerserverrequest.md "LoggerServerRequest")
  * [IMTServerAPI::LoggerRequest](imtserverapi_loggerrequest.md "LoggerRequest")

Event Types
Types of events that are reflected in the journal logs are listed in the enumeration EnMTLogType:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| MTLogTypeAll | 0 | All types of events. |
| MTLogTypeCfg | 1 | Events of [configuration](imtadminapi_config.md "Configuration Functions") changes. |
| MTLogTypeSys | 2 | System events. |
| MTLogTypeNet | 3 | Events related to the network activity. |
| MTLogTypeHst | 4 | Events associated with [price data](reference_ticks.md "Price Data"). |
| MTLogTypeUser | 5 | Events associated with [users](reference_user.md "Users"). |
| MTLogTypeTrade | 6 | [Trade](imtadminapi_trading.md "Trade Database Functions") events. |
| MTLogTypeAPI | 7 | Events associated with the Server API. |
| MTLogTypeNotify | 8 | Various notifications. For example, messages related to [monitoring operations of managers](https://support.metaquotes.net/en/docs/mt5/platform/administration/admin_managers#control). |
| MTLogTypeLiveUpdate | 16 | Events associated with the Live Update service. |
| MTLogTypeSendMail | 17 | Events associated with email. |
| MTLogTypeFirst |  | Beginning of enumeration. It corresponds to MTLogTypeAll. |
| MTLogTypeLast |  | End of enumeration. It corresponds to MTLogTypeSendMail. |

The events of update (MTLogTypeLiveUpdate) and email (MTLogTypeSendMail) are generated not at the server side, but by separate applications — mt5srvupdater.exe and mt5sendmail.exe.
This enumeration is used in the following methods:
  * [IMTAdminAPI::LoggerServerRequest](imtadminapi_loggerserverrequest.md "LoggerServerRequest")
  * [IMTManagerAPI::LoggerServerRequest](imtmanagerapi_loggerserverrequest.md "LoggerServerRequest")
  * [IMTServerAPI::LoggerRequest](imtserverapi_loggerrequest.md "LoggerRequest")

Log Flags
Flags that journal entries may have are listed in EnMTLogFlags:
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| LOG_FLAGS_NONE | 0 | The log does not have flags. |
| LOG_FLAGS_CORRUPTED | 1 | The log has an invalid checksum (damaged or changed from outside). |
| LOG_FLAGS_FIRST |  | Beginning of enumeration. It corresponds to LOG_FLAGS_NONE. |
| LOG_FLAGS_ALL |  | End of enumeration. It corresponds to LOG_FLAGS_CORRUPTED. |