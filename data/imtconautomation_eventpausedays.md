# EventPauseDays (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ EventPauseDays | [](imtconautomation_eventpausehours.md "EventPauseHours") [](imtconautomation_eventrepeats.md "EventRepeats") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::EventPauseDays
Get the number of days in the period of time for which the number of repetitions should be checked.>
C++
UINT IMTConAutomation::EventPauseDays() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutomation.EventPauseDays()  
---  
Python
MTConAutomation.EventPauseDays  
---  
Return Value
Number of days.
IMTConAutomation::EventPauseDays
Set the number of days in the period of time for which the number of repetitions should be checked.>
C++
MTAPIRES IMTConAutomation::EventPauseDays( const UINT days // Number of days )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.EventPauseDays( uint days // Number of days )  
---  
Python
MTConAutomation.EventPauseDays  
---  
Parameters
hours
[in] Number of days.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.