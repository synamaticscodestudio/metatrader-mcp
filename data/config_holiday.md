# Holidays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Holidays | [](imtcontimesink_ontimesync.md "OnTimeSync") [](imtconholiday.md "IMTConHoliday") |
| --- | --- | --- |
| --- | --- |

Holiday Configuration
Using the functions and interfaces described in this section, you can add holidays to the work timetable of the server, both for groups of symbols and for each symbol individually. On holidays, clients can connect, view charts and history of trades, but cannot trade.
The following interfaces of holiday settings are available:
  * [IMTConHoliday](imtconholiday.md "IMTConHoliday") An interface for configuring holidays.
  * [IMTConHolidaySink](imtconholidaysink.md "IMTConHolidaySink") An interface for handling events of changes of holiday settings.

The below figure shows different elements of holiday configurations in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [The date of a holiday](imtconholiday_year.md "Year").
  2. [Beginning time](imtconholiday_workfrom.md "WorkFrom").
  3. [End time](imtconholiday_workto.md "WorkTo").
  4. [Description of a holiday](imtconholiday_description.md "Description").
  5. [State of a holiday](imtconholiday_mode.md "Mode").
  6. An indication that the holiday is [annual](imtconholiday_year.md "Year").
  7. Configuration of [symbols](imtconholiday_symboladd.md "SymbolAdd") to which the holiday applies.
