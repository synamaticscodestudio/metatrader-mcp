# Routing (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Routing | [](imtcongatewaysink_ongatewaysync.md "OnGatewaySync") [](imtconroute.md "IMTConRoute") |
| --- | --- | --- |
| --- | --- |

Routing Configuration
The MetaTrader 5 platform allows creating a custom set of rules of routing clients' requests received by trade servers. In each routing rule, you can set up the parameters of trade requests, as well as actions that shall apply to them.
The following routing interfaces are available:
  * [IMTConRoute](imtconroute.md "IMTConRoute") An interface for accessing all the main rule settings.
  * [IMTConCondition](imtconcondition.md "IMTConCondition") An interface for accessing additional settings or routing rules.
  * [IMTConRouteDealer](imtconroutedealer.md "IMTConRouteDealer") An interface for accessing parameters of request passing to dealers.
  * [IMTConRouteSink](imtconroutesink.md "IMTConRouteSink") An interface that contains handlers of events associated with routing configuration.

The below figure shows different elements of configuration of the routing rules in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [State of a routing rule](imtconroute_mode.md "Mode").
  2. [Rule name](imtconroute_name.md "Name").
  3. [Action to be taken in connection with the requests](imtconroute_action.md "Action").
  4. [Type of requests processed according to this rule](imtconroute_request.md "Request").
  5. [Type of orders processed according to this rule](imtconroute_type.md "Type").
  6. [Additional conditions for defining requests](imtconcondition.md "IMTConCondition").
  7. [Type of additional condition](imtconcondition_condition.md "Condition").
  8. [Method for comparing a condition with the value](imtconcondition_rule.md "Rule").
  9. [The value of an additional condition](imtconcondition_valuetype.md "ValueType").
  10. [Add an additional condition](imtconroute_conditionadd.md "ConditionAdd").
  11. [Change an additional condition](imtconroute_conditionupdate.md "ConditionUpdate").
  12. [Delete an additional condition](imtconroute_conditiondelete.md "ConditionDelete").
  13. [A tab for configuring dealers](imtconroutedealer.md "IMTConRouteDealer") to process request under a specific rule.
