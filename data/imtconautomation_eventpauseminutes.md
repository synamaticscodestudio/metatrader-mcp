# EventPauseMinutes (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ EventPauseMinutes | [](imtconautomation_timemonthdays.md "TimeMonthdays") [](imtconautomation_eventpausehours.md "EventPauseHours") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::EventPauseMinutes
Get the number of minutes in the period of time for which the number of repetitions should be checked.>
C++
UINT IMTConAutomation::EventPauseMinutes() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutomation.EventPauseMinutes()  
---  
Python
MTConAutomation.EventPauseMinutes  
---  
Return Value
Number of minutes.
IMTConAutomation::EventPauseMinutes
Set the number of minutes in the period of time for which the number of repetitions should be checked.>
C++
MTAPIRES IMTConAutomation::EventPauseMinutes( const UINT minutes // Number of minutes )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.EventPauseMinutes( uint minutes // Number of minutes )  
---  
Python
MTConAutomation.EventPauseMinutes  
---  
Parameters
minutes
[in] Number of minutes.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.