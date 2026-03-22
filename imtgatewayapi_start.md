# Start (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Main Interface ](imtgatewayapi.md "Main Interface") / [ Server ](imtgatewayapi_server.md "Server")/ Start | [](imtgatewayapi_server.md "Server") [](imtgatewayapi_stop.md "Stop") |
| --- | --- | --- |
| --- | --- |

IMTGatewayAPI::Start
Gateway API server port launch.
C++
MTAPIRES IMTGatewayAPI::Start( IMTGatewaySink *sink, // IMTGatewaySink interface object LPCWSTR address=NULL // Address )  
---  
.NET
MTRetCode CIMTGatewayAPI.Start( CIMTGatewaySink sink, // CIMTGatewaySink interface object string[] address=NULL // Address )  
---  
Parameters
*sink
[in] [IMTGatewaySink](imtgatewaysink.md "Event Interface") interface object for notifications on the platform and Gateway API events.
address=NULL
[in] Address at which the client connections will be accepted. Defined as address:port. Several addresses separated with a comma can be specified here. For example, address1:port1,address2:port2. In case parameter value is not defined, default value is used. Address specified as the command line parameter during the launch of the executed gateway/data feed file is used as the default address. This address is passed in the argc and argv parameters of the [CMTGatewayAPIFactory::Create](cmtgatewayapifactory_create.md "Create") method. In case the address is not specified neither in the IMTGatewayAPI::Start method, nor in the command line, the server port will not be launched.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred, which corresponds to the response code.
Note
This method is called by the server during the gateway/data feed launch.
After IMTGatewayAPI::Start call, the object which implements the [IMTGatewaySink](imtgatewaysink.md "Event Interface") interface is considered subscribed to notifications from the Gateway API. Such an object can only be deleted after calling [IMTGatewayAPI::Stop](imtgatewayapi_stop.md "Stop").