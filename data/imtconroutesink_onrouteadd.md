# OnRouteAdd (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteSink ](imtconroutesink.md "IMTConRouteSink")/ OnRouteAdd | [](imtconroutesink.md "IMTConRouteSink") [](imtconroutesink_onrouteupdate.md "OnRouteUpdate") |
| --- | --- | --- |
| --- | --- |

IMTConRouteSink::OnRouteAdd
A handler of the event of adding a new routing rule.
C++
virtual void IMTConRouteSink::OnRouteAdd( const IMTConRoute* config // A pointer to the rule object )  
---  
.NET (Gateway/Manager API)
virtual void CIMTConRouteSink.OnRouteAdd( CIMTConRoute config // The rule object )  
---  
Parameters
config
[in] A pointer to the object of the added rule.
Note
This method is called by the API to notify that a new routing rule has been added.