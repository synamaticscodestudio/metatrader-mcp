# Login (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Routing ](config_route.md "Routing") / [ IMTConRouteDealer ](imtconroutedealer.md "IMTConRouteDealer")/ Login | [](imtconroutedealer_clear.md "Clear") [](imtconroutedealer_name.md "Name") |
| --- | --- | --- |
| --- | --- |

IMTConRouteDealer::Login
Get the login of a dealer to whom requests under this rule will be sent.
C++
UINT64 IMTConRouteDealer::Login() const  
---  
.NET (Gateway/Manager API)
ulong CIMTConRouteDealer.Login()  
---  
Python (Manager API)
MTConRouteDealer.Login  
---  
Return Value
The login of a dealer.
IMTConRouteDealer::Login
Set the login of a dealer to whom requests under this rule will be sent.
C++
MTAPIRES IMTConRouteDealer::Login( const UINT64 login // Dealer's login )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTConRouteDealer.Login( ulong login // Dealer's login )  
---  
Python (Manager API)
MTConRouteDealer.Login  
---  
Parameters
login
[in] The login of a dealer.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
An existing manager account with dealing permissions must be specified as the login.