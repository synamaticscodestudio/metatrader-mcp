# OnHolidayUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHolidaySink ](imtconholidaysink.md "IMTConHolidaySink")/ OnHolidayUpdate | [](imtconholidaysink_onholidayadd.md "OnHolidayAdd") [](imtconholidaysink_onholidaydelete.md "OnHolidayDelete") |
| --- | --- | --- |
| --- | --- |

IMTConHolidaySink::OnHolidayUpdate
A handler of the event of updating a holiday configuration.
C++
virtual void IMTConHolidaySink::OnHolidayUpdate( const IMTConHoliday* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConHolidaySink.OnHolidayUpdate( CIMTConHoliday  config // Configuration object )  
---  
Parameters
config
[in] A pointer to the updated configuration object.
Note
This method is called by the API to notify that a holiday configuration has changed.