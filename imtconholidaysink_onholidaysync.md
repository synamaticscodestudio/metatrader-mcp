# OnHolidaySync (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Holidays ](config_holiday.md "Holidays") / [ IMTConHolidaySink ](imtconholidaysink.md "IMTConHolidaySink")/ OnHolidaySync | [](imtconholidaysink_onholidaydelete.md "OnHolidayDelete") [](config_firewall.md "Firewall") |
| --- | --- | --- |
| --- | --- |

IMTConHolidaySink::OnHolidaySync
A handler of the event of synchronization of holiday configuration.
C++
virtual void IMTConHolidaySink::OnHolidaySync()  
---  
.NET (Gateway/Manager API)
virtual void CIMTConHolidaySink.OnHolidaySync()  
---  
Note
This method is called by the API to notify that a holiday configuration has been synchronized.
Synchronization of holiday configurations is performed on Access, History, Trade and Backup servers during connection to the main server.