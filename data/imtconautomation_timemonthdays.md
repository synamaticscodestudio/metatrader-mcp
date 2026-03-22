# TimeMonthdays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ TimeMonthdays | [](imtconautomation_timemonths.md "TimeMonths") [](imtconautomation_eventpauseminutes.md "EventPauseMinutes") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::TimeMonthdays
Get the days of the month on which the task automation trigger is allowed.
C++
UINT IMTConAutomation::TimeMonthdays() const  
---  
.NET (Gateway/Manager API)
EnTriggerWeekdays CIMTConAutomation.TimeMonthdays()  
---  
Python
MTConAutomation.TimeMonthdays  
---  
Return Value
One of the values of the [IMTConAutomation::EnTriggerMonthDays](imtconautomation_enum.htm#entriggermonthdays) enumeration.
IMTConAutomation::TimeMonthdays
Set the days of the month on which the task automation trigger is allowed.
C++
MTAPIRES IMTConAutomation::TimeMonthdays( const UINT monthdays // Days of the month when the trigger is enabled )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.TimeMonthdays( EnTriggerWeekdays monthdays // Days of the month when the trigger is enabled )  
---  
Python
MTConAutomation.TimeMonthdays  
---  
Parameters
monthdays
[in] The schedule is passed using the [IMTConAutomation::EnTriggerMonthDays](imtconautomation_enum.htm#entriggermonthdays) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.