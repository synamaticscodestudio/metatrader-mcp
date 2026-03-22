# OnRouteDelete (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteSink ](imtconroutesink.md "IMTConRouteSink")/ OnRouteDelete | [](imtconroutesink_onrouteupdate.md "OnRouteUpdate") [](imtconroutesink_onroutesync.md "OnRouteSync") |
| --- | --- | --- |
| --- | --- |

IMTConRouteSink::OnRouteDelete
A handler of the event of deletion of a routing rule.
C++
virtual void IMTConRouteSink::OnRouteDelete( const IMTConRoute* config // A pointer to the rule object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConRouteSink.OnRouteDelete( CIMTConRoute config // The rule object )  
---  
Parameters
config
[in] A pointer to the object of the deleted rule.
Note
This method is called by the API to notify that a routing rule has been deleted.