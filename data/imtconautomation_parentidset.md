# ParentIDSet (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutomation ](imtconautomation.md "IMTConAutomation")/ ParentIDSet | [](imtconautomation_parentid.md "ParentID") [](imtconautomation_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation::ParentIDSet
Set an ID of the subdirectory in which the automation task is located.
C++
MTAPIRES IMTConAutomation::ParentIDSet( const UINT64 parent_id // Identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutomation.ParentIDSet( ulong parent_id // Identifier )  
---  
Python
MTConAutomation.ParentID  
---  
Parameters
parent_id
[in] A unique identifier for the directory.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
For convenience, tasks can be grouped by directories. The [IMTConAutomation](imtconautomation.md "IMTConAutomation") configuration object can be either a description of the automation task or a description of a subdirectory of tasks. This can be determined by the [IMTConAutomation::FLAG_FOLDER](imtconautomation_enum.htm#enflags) flag.