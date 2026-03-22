# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Holidays ](webapi_holiday.md "Holidays")/ Data Structure | [](webapi_holiday.md "Holidays") [](webapi_holiday_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
A holiday configuration is passed in JSON format as a response to the [/api/holiday/add](webapi_holiday_add.md "Add") and [/api/holiday/next](webapi_holiday_next.md "Get by Index") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Description | String | Description of a holiday. |
| Mode | Integer | The state of the holiday. Passed as a value of [EnHolidayMode](imtconholiday_enum.htm#enholidaymode). |
| Year | Integer | The year of a holiday. |
| Month | Integer | The month of a holiday. |
| Day | Integer | The day of a holiday. |
| From | Integer | The beginning of the range of the server working time on a holiday, in minutes since 00:00. |
| To | Integer | The end of the range of the server working time on a holiday, in minutes since 00:00. |
| Symbols | Array | [The list of symbols](webapi_holiday_data_structure.htm#symbols), to which the holiday applies. |

List of symbols
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Path | String | Path to the symbol. |