# OrId (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations") / [ IMTConAutoCondition ](imtconautocondition.md "IMTConAutoCondition")/ OrId | [](imtconautocondition_rule.md "Rule") [](imtconautocondition_valuetype.md "ValueType") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition::OrId
Get the identifier for the "OR" condition group.
C++
UINT IMTConAutoCondition::OrId() const  
---  
.NET (Gateway/Manager API)
uint CIMTConAutoCondition.OrId()  
---  
Python
MTConAutoCondition.OrId  
---  
Return Value
Identifier for the "OR" condition group.
Note
If several conditions of the same type have the same OrId, it means that they belong to the same "OR" condition block.
IMTConAutoCondition::OrId
Set the identifier for the "OR" condition group.
C++
MTAPIRES IMTConAutoCondition::OrId( const UINT or_id // identifier )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConAutoCondition.OrId( uint or_id // identifier )  
---  
Python
MTConAutoCondition.OrId  
---  
Parameters
or_id
[in] Identifier for the "OR" condition group.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code is returned.
Note
The property is used to create "OR" conditions.
By default, all conditions are of type "AND", which means they are mandatory. This condition must be med for an automation task to trigger. Several conditions of the same time (IMTConAutoCondition::EnConditions) can be combined to an "OR" condition block. For example, you can create three conditions by the client country ([IMTConAutoConditio::CONDITION_ACCOUNT_COUNTRY](imtconautocondition_enum.htm#enconditions)) with different values: Spain, Netherlands, Croatia. Next, specify the same value for the IMTConAutoCondition::OrId property for these conditions. They will be combined into one "OR" condition block, and the automation task will trigger if the client is from any of the three specified countries.
Find our more about the condition types in the [MetaTrader 5 Administrator Documentation](https://support.metaquotes.net/ru/docs/mt5/platform/administration/automation/automation_condition#condition_type).