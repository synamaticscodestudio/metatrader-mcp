# OrderActivationMode (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ OrderActivationMode | [](imtexecution_orderactivationflags.md "OrderActivationFlags") [](imtexecution_ordertypefill.md "OrderTypeFill") |
| --- | --- | --- |
| --- | --- |

IMTExecution::OrderActivationMode
Gets the activation type of the order placed in an external system.
C++
UINT IMTExecution::OrderActivationMode()  
---  
.NET (Gateway/Manager API)
uint CIMTExecution.OrderActivationMode()  
---  
Return Value
A value of the [IMTOrder::EnOrderActivation](imtorder_enum.htm#enorderactivation) enumeration.
Note
IMTExecution::OrderActivationMode changes the value of the appropriate order field [IMTOrder::ActivationMode](imtorder_activationmode.md "ActivationMode").
IMTExecution::OrderActivationMode
Sets the activation type of the order placed in an external system.
C++
MTAPIRES IMTExecution::OrderActivationMode( const UINT activation // Activation type ) const  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.OrderActivationMode( uint activation // Activation type )  
---  
Parameters
activation
[in] Order activation type. The [IMTOrder::EnOrderActivation](imtorder_enum.htm#enorderactivation) enumeration is used to pass the type.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
IMTExecution::OrderActivationMode changes the value of the appropriate order field [IMTOrder::ActivationMode](imtorder_activationmode.md "ActivationMode").
Let's consider an example. A limit order having a large volume is passed to the external system. When a suitable price appears, the order is activated, and the order status changes to [ACTIVATION_PENDING](imtorder_enum.htm#enorderactivation). A part of the order is executed in an external system, and the Gateway API sends the appropriate IMTExecution object to MetaTrader 5. ACTIVATION_NONE value should be passed to the IMTOrderActivationMode field in order to change the state of a limit order with a residual volume into "Not activated", and to allow the platform to further track it.