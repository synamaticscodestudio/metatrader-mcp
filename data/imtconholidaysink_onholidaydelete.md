# OnHolidayDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHolidaySink ](imtconholidaysink.md "IMTConHolidaySink")/ OnHolidayDelete | [](imtconholidaysink_onholidayupdate.md "OnHolidayUpdate") [](imtconholidaysink_onholidaysync.md "OnHolidaySync") |
| --- | --- | --- |
| --- | --- |

IMTConHolidaySink::OnHolidayDelete
A handler of the event of removing a holiday configuration.
C++
virtual void IMTConHolidaySink::OnHolidayDelete( const IMTConHoliday* config // A pointer to the configuration object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConHolidaySink.OnHolidayDelete( CIMTConHoliday  config // Configuration object )  
---  
Parameters
config
[in] A pointer to the object of the deleted configuration.
Note
This method is called by the API to notify that a holiday configuration has been deleted.