# IMTConAutomation (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations")/ IMTConAutomation | [](config_automation.md "Automations") [](imtconautomation_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConAutomation
The IMTConAutomation class contains method for receiving end editing [automation tasks](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation):
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconautomation_release.md "Release") | Delete the current object. |
| [Assign](imtconautomation_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconautomation_clear.md "Clear") | Clear an object. |
| [ID](imtconautomation_id.md "ID") | Get a unique configuration identifier. |
| [ParentID](imtconautomation_parentid.md "ParentID") | Get the ID of the subdirectory in which the automation task is located. |
| [ParentIDSet](imtconautomation_parentidset.md "ParentIDSet") | Set an ID of the subdirectory in which the automation task is located. |
| [Name](imtconautomation_name.md "Name") | Get and set the name of the automation task. |
| [Trigger](imtconautomation_trigger.md "Trigger") | Get and set a trigger — an event in the platform, upon occurrence of which the automation task should be executed. |
| [Flags](imtconautomation_flags.md "Flags") | Get and set additional automation task settings. |
| [TimeStart](imtconautomation_timestart.md "TimeStart") | Get and set the date and time on which the trigger check will be activated. |
| [TimeExpire](imtconautomation_timeexpire.md "TimeExpire") | Get and set the date and time after which the trigger check will be disabled. |
| [TimeWeekdays](imtconautomation_timeweekdays.md "TimeWeekdays") | Get and set the days on which the task automation trigger is allowed. |
| [TimeMonths](imtconautomation_timemonths.md "TimeMonths") | Get and set the months in which the task automation trigger is allowed. |
| [TimeMonthdays](imtconautomation_timemonthdays.md "TimeMonthdays") | Get and set the days of the month on which the task automation trigger is allowed. |
| [EventPauseMinutes](imtconautomation_eventpauseminutes.md "EventPauseMinutes") | Get and set the number of minutes in the period of time for which the number of repetitions should be checked.> |
| [EventPauseHours](imtconautomation_eventpausehours.md "EventPauseHours") | Get and set the number of hours in the period of time for which the number of repetitions should be checked.> |
| [EventPauseDays](imtconautomation_eventpausedays.md "EventPauseDays") | Get and set the number of days in the period of time for which the number of repetitions should be checked.> |
| [EventRepeats](imtconautomation_eventrepeats.md "EventRepeats") | Get and set the maximum number of event repetitions. |
| [ConditionAdd](imtconautomation_conditionadd.md "ConditionAdd") | Add an automation task triggering condition. |
| [ConditionUpdate](imtconautomation_conditionupdate.md "ConditionUpdate") | Edit an automation task triggering condition at the specified position. |
| [ConditionDelete](imtconautomation_conditiondelete.md "ConditionDelete") | Delete an automation task triggering condition at the specified position. |
| [ConditionClear](imtconautomation_conditionclear.md "ConditionClear") | Clear the list of all automation task triggering conditions. |
| [ConditionShift](imtconautomation_conditionshift.md "ConditionShift") | Move an automation task triggering condition in the list. |
| [ConditionTotal](imtconautomation_conditiontotal.md "ConditionTotal") | Get the number of conditions of an automation task trigger. |
| [ConditionNext](imtconautomation_conditionnext.md "ConditionNext") | Get an automation task triggering condition by index. |
| [ActionAdd](imtconautomation_actionadd.md "ActionAdd") | Add an automation task action. |
| [ActionUpdate](imtconautomation_actionupdate.md "ActionUpdate") | Edit an automation task action at the specified position. |
| [ActionDelete](imtconautomation_actiondelete.md "ActionDelete") | Delete an automation task action at the specified position. |
| [ActionClear](imtconautomation_actionclear.md "ActionClear") | Clear the list of all automation task actions. |
| [ActionShift](imtconautomation_actionshift.md "ActionShift") | Move an automation task action in the list. |
| [ActionTotal](imtconautomation_actiontotal.md "ActionTotal") | Get the number of actions in an automation task. |
| [ActionNext](imtconautomation_actionnext.md "ActionNext") | Get an automation task action by index. |

The IMTConAutomation class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnFlags](imtconautomation_enum.htm#enflags) | Automation task setup flags. |
| [EnTriggers](imtconautomation_enum.htm#entriggers) | Triggers — events in the platform upon the occurrence of which the automation task should be executed. |
| [EnTriggerWeekdays](imtconautomation_enum.htm#entriggerweekdays) | Days on which task triggers can fire. |
| [EnTriggerMonths](imtconautomation_enum.htm#entriggermonths) | Months in which task triggers can fire. |
| [EnTriggerMonthDays](imtconautomation_enum.htm#entriggermonthdays) | Days of the month on which task triggers can fire. |