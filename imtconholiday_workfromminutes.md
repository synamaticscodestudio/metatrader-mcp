# WorkFromMinutes (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHoliday ](imtconholiday.md "IMTConHoliday")/ WorkFromMinutes | [](imtconholiday_workfromhours.md "WorkFromHours") [](imtconholiday_workto.md "WorkTo") |
| --- | --- | --- |
| --- | --- |

IMTConHoliday::WorkFromMinutes
Get the number of minutes in the beginning of the range of the server working time.
C++
UINT IMTConHoliday::WorkFromMinutes() const  
---  
.NET (Gateway/Manager API)
uint CIMTConHoliday.WorkFromMinutes()  
---  
Python (Manager API)
MTConHoliday.WorkFromMinutes  
---  
Return Value
The number of minutes in the beginning of the range of the server working time.
Note
For example, if the [IMTConHoliday::WorkFrom](imtconholiday_workfrom.md "WorkFrom") method returns , the IMTConHoliday::WorkFromMinutes will return 40 (the number of minutes for 01:40).