# TimeWeekdays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ TimeWeekdays | [](imtconautomation_timeexpire.md "TimeExpire") [](imtconautomation_timemonths.md "TimeMonths") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::TimeWeekdays
Get the days on which the task automation trigger is allowed.
C++
UINT IMTConAutomation::TimeWeekdays() const  
---  
.NET (Gateway/Manager API)
EnTriggerWeekdays CIMTConAutomation.TimeWeekdays()  
---  
Python
MTConAutomation.TimeWeekdays  
---  
Return Value
One of the values of the [IMTConAutomation::EnTriggerWeekdays](imtconautomation_enum.htm#entriggerweekdays) enumeration.
IMTConAutomation::TimeWeekdays
Set the days on which the task automation trigger is allowed.
C++
MTAPIRES IMTConAutomation::TimeWeekdays( const UINT weekdays // Days when the trigger is enabled )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.TimeWeekdays( EnTriggerWeekdays weekdays // Days when the trigger is enabled )  
---  
Python
MTConAutomation.TimeWeekdays  
---  
Parameters
weekdays
[in] The schedule is passed using the [IMTConAutomation::EnTriggerWeekdays](imtconautomation_enum.htm#entriggerweekdays) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.