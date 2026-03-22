# WorkToHours (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ WorkToHours | [](imtconholiday_workto.md "WorkTo") [](imtconholiday_worktominutes.md "WorkToMinutes") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::WorkToHours
Get the number of hours in the end of the range of the server working time.
C++
UINT IMTConHoliday::WorkToHours() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.WorkToHours()  
---  
Python (Manager API)
MTConHoliday.WorkToHours  
---  
Return Value
The number of hours in the end of the range of the server working time.
Note
For example, if the [IMTConHoliday::WorkTo](imtconholiday_workto.md "WorkTo") method returns the value 100, the IMTConHoliday::WorkToHours will return 1 (the number of hours for 01:40).