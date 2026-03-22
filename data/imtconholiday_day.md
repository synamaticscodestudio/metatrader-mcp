# Day (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ Day | [](imtconholiday_month.md "Month") [](imtconholiday_workfrom.md "WorkFrom") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::Day
Get the day of a holiday.
C++
UINT IMTConHoliday::Day() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.Day()  
---  
Python (Manager API)
MTConHoliday.Day  
---  
Return Value
The day of a holiday.
Note
The holiday day must be a value from the range 1 to 31.
IMTConHoliday::Day
Set the day of a holiday.
C++
MTAPIRES IMTConHoliday::Day( const UINT day // Day of a holiday )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.Day( uint day // Day of a holiday )  
---  
Python (Manager API)
MTConHoliday.Day  
---  
Parameters
day
[in] The day of a holiday in the range from 1 to 31.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.