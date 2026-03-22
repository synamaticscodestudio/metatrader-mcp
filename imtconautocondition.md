# IMTConAutoCondition (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Automations ](config_automation.md "Automations")/ IMTConAutoCondition | [](imtconautomation_actionnext.md "ActionNext") [](imtconautocondition_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConAutoCondition
The IMTConAutoCondition class contains methods for working with automation task [triggering conditions](https://support.metaquotes.net/en/docs/mt5/platform/administration/automation/automation_condition):
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconautocondition_release.md "Release") | Delete the current object. |
| [Assign](imtconautocondition_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconautocondition_clear.md "Clear") | Clear an object. |
| [Condition](imtconautocondition_condition.md "Condition") | Get and set the type of an additional condition for a rule. |
| [Rule](imtconautocondition_rule.md "Rule") | Get and set a method for comparing a condition with the specified value. |
| [OrId](imtconautocondition_orid.md "OrId") | Get and set the identifier for the "OR" condition group. |
| [ValueType](imtconautocondition_valuetype.md "ValueType") | Get the type of value an additional condition for a routing rule. |
| [ValueInt](imtconautocondition_valueint.md "ValueInt") | Get and set a condition value of the INT type. |
| [ValueUInt](imtconautocondition_valueuint.md "ValueUInt") | Get and set a condition value of the UINT type. |
| [ValueDouble](imtconautocondition_valuedouble.md "ValueDouble") | Get and set a condition value of the double type. |
| [ValueString](imtconautocondition_valuestring.md "ValueString") | Get and set a condition value of the string type. |
| [ValueColor](imtconautocondition_valuecolor.md "ValueColor") | Get and set a condition value of the colorref type. |
| [ValueMoney](imtconautocondition_valuemoney.md "ValueMoney") | Get and set a condition value that expresses the amount of money. |
| [ValueVolume](imtconautocondition_valuevolume.md "ValueVolume") | Get and set a condition value that expresses the volume. |
| [ValueDatetime](imtconautocondition_valuedatetime.md "ValueDatetime") | Get and set a condition value that expresses date and time. |
| [ValueLeverage](imtconautocondition_valueleverage.md "ValueLeverage") | Get and set a condition value that expresses the leverage. |
| [ValueBool](imtconautocondition_valuebool.md "ValueBool") | Get and set a condition value of the bool type. |
| [ValueTime](imtconautocondition_valuetime.md "ValueTime") | Get and set and set a condition value that expresses the time. |
| [ValueDate](imtconautocondition_valuedate.md "ValueDate") | Get and set a condition value expressing a date. |
| [ValuePercent](imtconautocondition_valuepercent.md "ValuePercent") | Get and set a condition value expressing a percentage. |
| [ValueLanguage](imtconautocondition_valuelanguage.md "ValueLanguage") | Get and set a condition value expressing the language. |
| [ValueServer](imtconautocondition_valueserver.md "ValueServer") | Get and set the value of a condition expressing server identifier. |
| [ValuePositionType](imtconautocondition_valuepositiontype.md "ValuePositionType") | Get and set a condition value expressing position type. |
| [ValueReason](imtconautocondition_valuereason.md "ValueReason") | Get and set a condition value expressing the reason for a trading operation. |
| [ValueDealType](imtconautocondition_valuedealtype.md "ValueDealType") | Get and set a condition value expressing the deal type. |
| [ValueDealEntry](imtconautocondition_valuedealentry.md "ValueDealEntry") | Get and set a condition value expressing deal direction. |
| [ValueOrderType](imtconautocondition_valueordertype.md "ValueOrderType") | Get and set a condition value expressing order type. |
| [ValueOrderState](imtconautocondition_valueorderstate.md "ValueOrderState") | Get and set a condition value expressing order state. |

The IMTConAutoCondition class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnConditions](imtconautocondition_enum.htm#enconditions) | Automation task triggering conditions. |
| [EnConditionRule](imtconautocondition_enum.htm#enconditionrule) | Conditional comparison methods. |
| [EnConditionType](imtconautocondition_enum.htm#enconditiontype) | Types of parameters. |