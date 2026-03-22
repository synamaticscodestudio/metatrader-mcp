# IMTConRoute (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing")/ IMTConRoute | [](config_route.md "Routing") [](imtconroute_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConRoute
The IMTConRoute class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconroute_release.md "Release") | Deletes the current object. |
| [Assign](imtconroute_assign.md "Assign") | Assigns a passed object to the current one. |
| [Clear](imtconroute_clear.md "Clear") | Clears an object. |
| [Name](imtconroute_name.md "Name") | Gets and sets the name of a routing rule. |
| [Mode](imtconroute_mode.md "Mode") | Gets and sets the state of a routing rule. |
| [Request](imtconroute_request.md "Request") | Gets and sets the types of requests for which the rule is applicable. |
| [Type](imtconroute_type.md "Type") | Gets and sets the types of orders for which the rule is applicable. |
| [Action](imtconroute_action.md "Action") | Gets and sets the type of action that is applied to a request in accordance with a rule. |
| [ParamType](imtconroute_paramtype.md "ParamType") | Gets the type of an additional parameter for a routing rule. |
| [ParamInt](imtconroute_paramint.md "ParamInt") | Gets and sets the value of an additional parameter of the INT type. |
| [ParamUInt](imtconroute_paramuint.md "ParamUInt") | Gets and sets the value of an additional parameter of the UINT type. |
| [ParamDouble](imtconroute_paramdouble.md "ParamDouble") | Gets and sets the value of an additional parameter of the double type. |
| [ParamString](imtconroute_paramstring.md "ParamString") | Gets and sets the value of an additional parameter of the string type. |
| [ParamColor](imtconroute_paramcolor.md "ParamColor") | Gets and sets the value of an additional parameter of the colorref type. |
| [ParamMoney](imtconroute_parammoney.md "ParamMoney") | Gets and sets the value of an additional parameter that expresses the amount of money. |
| [ParamVolume](imtconroute_paramvolume.md "ParamVolume") | Gets and sets the value of an additional parameter that expresses the volume. |
| [ParamVolumeExt](imtconroute_paramvolumeext.md "ParamVolumeExt") | Gets and sets the value of an additional parameter that expresses the volume with extended accuracy. |
| [ParamDatetime](imtconroute_paramdatetime.md "ParamDatetime") | Gets and sets the value of an additional parameter that expresses date and time. |
| [ParamLeverage](imtconroute_paramleverage.md "ParamLeverage") | Gets and sets the value of an additional parameter that expresses the leverage. |
| [ParamBool](imtconroute_parambool.md "ParamBool") | Gets and sets the value of an additional parameter of the bool type. |
| [ParamTime](imtconroute_paramtime.md "ParamTime") | Gets and sets the value of an additional parameter that expresses the time. |
| [ConditionAdd](imtconroute_conditionadd.md "ConditionAdd") | Adds an additional condition to apply a rule. |
| [ConditionUpdate](imtconroute_conditionupdate.md "ConditionUpdate") | Changes an additional condition to apply a rule at the specified position. |
| [ConditionDelete](imtconroute_conditiondelete.md "ConditionDelete") | Deletes an additional condition to apply a rule at the specified position. |
| [ConditionClear](imtconroute_conditionclear.md "ConditionClear") | Clears the list of all additional conditions to apply a rule. |
| [ConditionShift](imtconroute_conditionshift.md "ConditionShift") | Moves an additional condition of rule application in the list. |
| [ConditionTotal](imtconroute_conditiontotal.md "ConditionTotal") | Gets the number of additional conditions for applying a routing rule. |
| [ConditionNext](imtconroute_conditionnext.md "ConditionNext") | Gets an additional condition to apply a rule by its index. |
| [DealerAdd](imtconroute_dealeradd.md "DealerAdd") | Adds a dealer to whom requests under the conditions of this rule will be sent for processing. |
| [DealerUpdate](imtconroute_dealerupdate.md "DealerUpdate") | Updates a dealer to whom requests under the conditions of this rule will be sent for processing. |
| [DealerDelete](imtconroute_dealerdelete.md "DealerDelete") | Deletes an entry of a dealer to whom requests under the conditions of this rule will be sent for processing. |
| [DealerClear](imtconroute_dealerclear.md "DealerClear") | Clears the list of dealers to whom requests under the conditions of this rule will be sent for processing. |
| [DealerShift](imtconroute_dealershift.md "DealerShift") | Moves an entry of a dealer to whom requests under the conditions of this rule will be sent for processing. |
| [DealerTotal](imtconroute_dealertotal.md "DealerTotal") | Gets the total number of entries of dealers to whom requests under the conditions of this rule will be sent for processing. |
| [DealerNext](imtconroute_dealernext.md "DealerNext") | Gets a dealer entry in a routing rule by the index. |
| [DealerGet](imtconroute_dealerget.md "DealerGet") | Gets a dealer entry in a routing rule by the login. |

The IMTConRoute class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnRouteMode](imtconroute_enum.htm#enroutemode) | State of the rule. |
| [EnRouteFlags](imtconroute_enum.htm#enrouteflags) | Conditions of the request type. |
| [EnTypeFlags](imtconroute_enum.htm#entypeflags) | Conditions of the order type. |
| [EnRouteAction](imtconroute_enum.htm#enrouteaction) | Types of actions applicable to the requests. |