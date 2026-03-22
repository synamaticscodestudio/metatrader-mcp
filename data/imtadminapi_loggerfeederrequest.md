# LoggerFeederRequest (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Common Functions ](imtadminapi_common.md "Common Functions")/ LoggerFeederRequest | [](imtadminapi_loggergatewayrequest.md "LoggerGatewayRequest") [](imtadminapi_release.md "Release") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::LoggerFeederRequest
Request the logs of [data feeds](imtadminapi_config_datafeed.md "Functions").
C++
MTAPIRES IMTAdminAPI::LoggerFeederRequest( const UINT feeder_pos, // Position of a data feed const INT64 from, // Start date of the request const INT64 to, // End date of the request LPCWSTR filter, // Keyword MTLogRecord*& records, // Array of entries UINT& records_total // The number of received entries )  
---  
.NET
MTLogRecord[] CIMTAdminAPI.LoggerFeederRequest( uint feeder_pos, // Position of a data feed long from, // Start date of the request long to, // End date of the request string filter, // Keyword out MTRetCode res // Response code )  
---  
Python
AdminAPI.LoggerFeederRequest( feeder_pos, # Position of a data feed from, # Start date of the request to, # End date of the request filter # Keyword )  
---  
Parameters
feeder_pos
[in] The position of a data feed in the list of configurations, ranging from 0.
from
[in] The start date for requesting logs. The date is specified in seconds that have elapsed since 01.01.1970.
to
[in] The end date for requesting logs. The date is specified in seconds that have elapsed since 01.01.1970.
filter
[in] A key word for searching logs.
records
[out] A reference to the array of structures that describe logs ([MTLogRecord](mtlogrecord.md "MTLogRecord")).
records_total
[out] The total number of received journal entries.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Note
After using, the records array must be released using the [IMTAdminAPI::Free](imtadminapi_free.md "Free") method.
This method cannot be called from event handlers (any methods of IMT*Sink classes).