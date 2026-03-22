# Data Structure (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ Configuration Databases ](webapi_config.md "Configuration Databases") / [ Routing ](webapi_route.md "Routing")/ Data Structure | [](webapi_route.md "Routing") [](webapi_route_add.md "Add") |
| --- | --- | --- |
| --- | --- |

Data Structure
A routing configuration is passed in JSON format in response to the [/api/route/add](webapi_route_add.md "Add"), [/api/route/next](webapi_route_next.md "Get by Index") and [/api/route/get](webapi_route_get.md "Get by Name") requests.
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Name | String | The name of a routing rule. |
| Mode | Integer | The state of the routing rule. Passed as a value of the [EnRouteMode](imtconroute_enum.htm#enroutemode)enumeration. |
| Request | Integer | Types of requests for which the rule is applicable. Passed as a value of the [EnRouteFlags](imtconroute_enum.htm#enrouteflags) enumeration. |
| Type | Integer | Types of orders for which the rule is applicable. Passed as a value of the [EnTypeFlags](imtconroute_enum.htm#entypeflags) enumeration. |
| Flags | Integer | Rule flags. Currently not used. |
| Action | Integer | The type of action that is applied to a request in accordance with the rule. Passed as a value of the [EnRouteAction](imtconroute_enum.htm#enrouteaction) enumeration. |
| ActionValueInt | Integer | The value of an additional parameter of INT type. |
| ActionValueUInt | Integer | The value of an additional parameter of UINT type. |
| ActionValueFloat | Float | The value of an additional parameter of double type. |
| ActionValueString | String | The value of an additional parameter of string type. |
| Conditions | Array | [Additional conditions](webapi_route_data_structure.htm#conditions) for rule triggering. |
| Dealers | Array | [Dealers](webapi_route_data_structure.htm#dealers) to whom requests under the conditions of this rule will be sent for processing. |

Additional conditions
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Condition | Integer | The type of the additional condition for the rule. Passed as a value of the [EnRouteCondition](imtconcondition_enum.htm#enroutecondition) enumeration. |
| Rule | Integer | A method for comparing a condition with the specified value. Passed as a value of the [EnConditionRule](imtconcondition_enum.htm#enconditionrule) enumeration. |
| ValueInt | Integer | Condition value of INT type. |
| ValueUInt | Integer | Condition value of UINT type. |
| ValueDouble | Float | Condition value of double type. |
| ValueString | String | Condition value of string type. |

Dealers
| Parameter | Type | Purpose |
| --- | --- | --- |
| --- | --- | --- |
| Login | Integer | The login of the dealer to whom requests under this rule will be sent. |
| Name | String | The name of the dealer to whom requests under this rule will be sent. |