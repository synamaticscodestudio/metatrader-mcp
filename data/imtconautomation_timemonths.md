# TimeMonths (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ TimeMonths | [](imtconautomation_timeweekdays.md "TimeWeekdays") [](imtconautomation_timemonthdays.md "TimeMonthdays") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::TimeMonths
Get the months in which the task automation trigger is allowed.
C++
UINT IMTConAutomation::TimeMonths() const  
---  
.NET (Gateway/Manager API)
EnTriggerMonths CIMTConAutomation.TimeMonths()  
---  
Python
MTConAutomation.TimeMonths  
---  
Return Value
One of the values of the [IMTConAutomation::EnTriggerMonths](imtconautomation_enum.htm#entriggermonths) enumeration.
IMTConAutomation::TimeMonths
Set the months in which the task automation trigger is allowed.
C++
MTAPIRES IMTConAutomation::TimeMonths( const UINT months // Months when the trigger is enabled )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.TimeMonths( EnTriggerMonths months // Months when the trigger is enabled )  
---  
Python
MTConAutomation.TimeMonths  
---  
Parameters
months
[in] The schedule is passed using the [IMTConAutomation::EnTriggerMonths](imtconautomation_enum.htm#entriggermonths) enumeration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.