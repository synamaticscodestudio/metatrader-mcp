# EventRepeats (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ EventRepeats | [](imtconautomation_eventpausedays.md "EventPauseDays") [](imtconautomation_conditionadd.md "ConditionAdd") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::EventRepeats
Get the maximum number of event repetitions.
C++
UINT IMTConAutomation::EventRepeats() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutomation.EventRepeats()  
---  
Python
MTConAutomation.EventRepeats  
---  
Return Value
The maximum number of event repetitions.
Note
The period of time, for which the number of repetitions is set, is checked by [IMTConAutomation::EventPause*](imtconautomation_eventpauseminutes.md "EventPauseMinutes") methods.
IMTConAutomation::EventRepeats
Set the maximum number of event repetitions.
C++
MTAPIRES IMTConAutomation::EventRepeats( const UINT repeats // Number of repetitions )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.EventRepeats( uint repeats // Number of repetitions )  
---  
Python
MTConAutomation.EventRepeats  
---  
Parameters
repeats
[in] The maximum number of event repetitions.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
The period of time, for which the number of repetitions is set, is checked by [IMTConAutomation::EventPause*](imtconautomation_eventpauseminutes.md "EventPauseMinutes") methods.