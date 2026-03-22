# WorkToMinutes (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ WorkToMinutes | [](imtconholiday_worktohours.md "WorkToHours") [](imtconholiday_symboladd.md "SymbolAdd") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::WorkToMinutes
Get the number of minutes in the end of the range of the server working time.
C++
UINT IMTConHoliday::WorkToMinutes() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.WorkToMinutes()  
---  
Python (Manager API)
MTConHoliday.WorkToMinutes  
---  
Return Value
The number of minutes in the end of the range of the server working time.
Note
For example, if the [IMTConHoliday::WorkTo](imtconholiday_workto.md "WorkTo") method returns , the IMTConHoliday::WorkToMinutes will return 40 (the number of minutes for 01:40).