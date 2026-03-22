# WorkFromHours (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ WorkFromHours | [](imtconholiday_workfrom.md "WorkFrom") [](imtconholiday_workfromminutes.md "WorkFromMinutes") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::WorkFromHours
Get the number of hours in the beginning of the range of the server working time.
C++
UINT IMTConHoliday::WorkFromHours() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.WorkFromHours()  
---  
Python (Manager API)
MTConHoliday.WorkFromHours  
---  
Return Value
The number of hours in the beginning of the range of the server working time.
Note
For example, if the [IMTConHoliday:WorkFrom](imtconholiday_workfrom.md "WorkFrom") method returns 100, the IMTConHoliday::WorkFromHours will return 1 (the number of hours for 01:40).