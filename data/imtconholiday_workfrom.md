# WorkFrom (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ WorkFrom | [](imtconholiday_day.md "Day") [](imtconholiday_workfromhours.md "WorkFromHours") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::WorkFrom
Get the beginning of the range of the server working time on a holiday.
C++
UINT IMTConHoliday::WorkFrom() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.WorkFrom()  
---  
Python (Manager API)
MTConHoliday.WorkFrom  
---  
Return Value
The beginning of the range of the server working time on a holiday, in minutes elapsed since 00:00. For example, 100 denotes 01:40.
IMTConHoliday::WorkFrom
Set the beginning of the range of the server working time on a holiday.
C++
MTAPIRES IMTConHoliday::WorkFrom( const UINT from // Beginning of the range )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConHoliday.WorkFrom( uint from // Beginning of the range )  
---  
Python (Manager API)
MTConHoliday.WorkFrom  
---  
Parameters
from
[in] The beginning of the range of the server working time in minutes elapsed since 00:00. For example, 100 denotes 01:40.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.