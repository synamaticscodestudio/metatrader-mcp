# Year (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ Year | [](imtconholiday_mode.md "Mode") [](imtconholiday_month.md "Month") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::Year
Get the year of a holiday.
C++
UINT IMTConHoliday::Year() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.Year()  
---  
Python (Manager API)
MTConHoliday.Year  
---  
Return Value
The year of a holiday.
Note
The 0 value means that the holiday is annual.
IMTConHoliday::Year
Set the year of a holiday.
C++
MTAPIRES IMTConHoliday::Year( const UINT year // The year of a holiday )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.Year( uint  year // The year of a holiday )  
---  
Python (Manager API)
MTConHoliday.Year  
---  
Parameters
year
[in] The year of a holiday, e.g. 2010. If the 0 value is set, the holiday will be annual.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.