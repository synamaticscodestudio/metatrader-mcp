# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Time ](webapi_time.md "Time")/ Data Structure | [](webapi_time.md "Time") [](webapi_time_server.md "Get Server Time") |
| --- | --- | --- |
| --- | --- |

Data Structure
Time configuration is passed in JSON format as a response to the [/api/time/get](webapi_time_get.md "Get Settings") request. The time configuration includes the following parameters:
| Option Field | Type | Description |
| --- | --- | --- |
| --- | --- | --- |
| Daylight | Integer | The mode of switching to the daylight saving time. 0 — DST switching disabled, 1 — enabled. |
| DaylightState | Integer | The presence of the daylight saving time in the platform time zone. 0 means no daylight saving time is applied in the platform time zone. Otherwise, any non-zero value is used. |
| TimeZone | Integer | The time zone of the server. Specified in minutes from GMT. For example: 0 = GMT; -60 = GMT - 1; 60 = GMT + 1. |
| TimeServer | String | The address of a server for synchronizing time. |
| Days | Array of integer numbers | A two-dimensional array [7][24], where the first dimension denotes days of the week (starting with Sunday), the second one denotes hours. The sign of the working/nonworking hour is passed in a value of the [EnTimeTableMode](imtcontime_enum.htm#entimetablemode) enumeration. |