# ParentID (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ParentID | [](imtconautomation_id.md "ID") [](imtconautomation_parentidset.md "ParentIDSet") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ParentID
Get the ID of the subdirectory in which the automation task is located.
C++
UINT64 IMTConAutomation::ParentID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConAutomation.ParentID()  
---  
Python
MTConAutomation.ParentID  
---  
Return Value
The unique identifier for the directory.
Note
For convenience, tasks can be grouped by directories. The [IMTConAutomation](imtconautomation.md "IMTConAutomation") configuration object can be either a description of the automation task or a description of a subdirectory of tasks. This can be determined by the [IMTConAutomation::FLAG_FOLDER](imtconautomation_enum.htm#enflags) flag.