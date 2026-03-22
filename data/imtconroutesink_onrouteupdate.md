# OnRouteUpdate (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteSink ](imtconroutesink.md "IMTConRouteSink")/ OnRouteUpdate | [](imtconroutesink_onrouteadd.md "OnRouteAdd") [](imtconroutesink_onroutedelete.md "OnRouteDelete") |
| --- | --- | --- |
| --- | --- |

IMTConRouteSink::OnRouteUpdate
A handler of the event of updating a routing rule.
C++
virtual void IMTConRouteSink::OnRouteUpdate( const IMTConRoute* config // A pointer to the rule object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConRouteSink.OnRouteUpdate( CIMTConRoute  config // The rule object )  
---  
Parameters
config
[in] A pointer to the object of the modified rule.
Note
This method is called by the API to notify of change of a routing rule.